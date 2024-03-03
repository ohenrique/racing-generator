import React from "react";
import { FlatList, Text } from "react-native";
import { RacersListItem } from "./RacersListItem";
import { Racer } from "../../types/racer";

type RacersListProps = {
    racers: Racer[];
};

export const RacersList = ({ racers }: RacersListProps) => {
    if (racers.length === 0) return <Text>No racers has been fetched</Text>;

    return (
        <FlatList
            data={racers}
            keyExtractor={racer => racer.name}
            renderItem={({ item }) => <RacersListItem racer={item} />}
        />
    );
};
