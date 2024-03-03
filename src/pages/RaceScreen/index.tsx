import React, { useState } from "react";
import { View, Text } from "react-native";
import { style } from "./styles";
import { Button } from "../../components/Button";

import { RacersList } from "./RacerList";
import { Racer } from "../../types/racer";
import { Racers } from "./racers-mock";

export const RaceScreen = () => {

    const [racers, setRacers] = useState<Racer[]>([]);
    const [status, setStatus] = useState("Not yet run");

    const searchRacers = () => {
        setRacers(Racers);
        setStatus("In progress");
    }

    return (
        <View style={style.container}>
            <View style={[style.card, style.status]}>
                <Text>Race status</Text>
                <Text>{status}</Text>
            </View>
            <View style={style.card}>
                <RacersList racers={racers} />
            </View>
            {racers.length > 0 ?
                (<Button title="Lets start!" />) :
                (<Button title="Generate the racers" onPress={() => searchRacers()} />)}
        </View>
    )
};
