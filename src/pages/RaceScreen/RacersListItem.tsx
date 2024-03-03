import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Racer } from "../../types/racer";

type RacersItemProps = {
    racer: Racer;
};

export const RacersListItem = ({
    racer: { name, color, weight, length, running, winLikelihood }
}: RacersItemProps) => (
    <View style={style.container}>
        <Text>{name}</Text>
        <Text>
            <Text>{color}</Text>
            <Text>{weight}</Text>
            <Text>{length}</Text>
            {running ? <ActivityIndicator /> : <Text>{winLikelihood ? ((winLikelihood || 0) * 100).toFixed(2) + "%" : ""}</Text>}
        </Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        padding: 4,
    },
});
