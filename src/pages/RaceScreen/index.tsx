import React, { useCallback, useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { style } from "./styles";
import { Button } from "../../components/Button";

import { RacersList } from "./RacerList";
import { QUERY_RACERS, RacersQueryResponse } from "../../services/racer-service";
import { useLazyQuery } from "@apollo/client";
import { Racer } from "../../types/racer";

export const RaceScreen = () => {

    const [racers, setRacers] = useState<Racer[]>([]);
    const [status, setStatus] = useState("Not yet run");

    const [queryRacers, { data, loading }] = useLazyQuery<RacersQueryResponse>(
        QUERY_RACERS,
        {
            fetchPolicy: "network-only",
        },
    );

    useEffect(() => {
        if (!data?.racers) return;
        setRacers(data.racers);
    }, [data]);

    useEffect(() => {
        if (!loading) return;
        setStatus("In progress");
    }, [loading]);

    return (
        <View style={style.container}>
            <View style={[style.card, style.status]}>
                <Text>Race status</Text>
                <Text>{status}</Text>
            </View>
            <View style={style.card}>
                {loading ?
                    (<ActivityIndicator size="large" color={"#eb3636"} />) :
                    (<RacersList racers={racers} />)
                }
            </View>
            {racers.length > 0 ?
                (<Button title="Lets start!" />) :
                (<Button title="Generate the racers" onPress={() => queryRacers()} />)}
        </View>
    )
};
