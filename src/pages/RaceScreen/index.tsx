import React, { useCallback, useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { style } from "./styles";
import { Button } from "../../components/Button";

import { RacersList } from "./RacerList";
import { QUERY_RACERS, RacersQueryResponse } from "../../services/racer-service";
import { useLazyQuery } from "@apollo/client";
import { Racer } from "../../types/racer";
import { generateRacerWinLikelihoodCalculator } from "../../utils";

type Status = "Not yet run" | "In progress" | "All Concluded";

export const RaceScreen = () => {

    const [racers, setRacers] = useState<Racer[]>([]);
    const [status, setStatus] = useState<Status>("Not yet run");
    const [isFetchable, setFetchable] = useState(true);

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
        const globalState = getGlobalState();

        if (globalState === "All Concluded")
            setFetchable(true);

        setStatus(globalState)
    }, [data, loading, racers]);

    const getGlobalState = (): Status => {
        if (!data?.racers)
            return "Not yet run"
        if (racers.length > 0 && racers.every(race => race.winLikelihood))
            return "All Concluded";
        else
            return "In progress"
    }

    const calculateRacerWinLikelihood = () => {
        setFetchable(false);
        racers.forEach(async (racer: Racer) => {
            const racerWinCalculator = generateRacerWinLikelihoodCalculator();

            racerWinCalculator(async (result: number) => {
                setRacers((prevRacer) => {
                    const updatedRacers = [...prevRacer];
                    return updatedRacers
                        .map(r => r.name === racer.name ? { ...racer, winLikelihood: result } : r)
                        .sort((curr, next) => (next.winLikelihood || -1) - (curr.winLikelihood || -1));
                })
            })
        });
    };

    const initWinCalculation = () => setRacers(racers.map(racer => ({ ...racer, running: true, winLikelihood: undefined })));

    const startRacing = () => {
        initWinCalculation();
        calculateRacerWinLikelihood();
    }

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
            <View>
                {racers.length > 0 ?
                    (<>
                        <Button title="Start the Race!" onPress={() => startRacing()} disabled={!isFetchable} />
                        <Button title="Refetch the racers" type="transparent" onPress={() => queryRacers()} disabled={!isFetchable} />
                    </>) :
                    (<Button title="Generate the racers" onPress={() => queryRacers()} disabled={!isFetchable} />)}
            </View>
        </View>
    )
};
