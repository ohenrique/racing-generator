import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Racer } from "../../types/racer";

type RacersItemProps = {
    racer: Racer;
};

export const RacersListItem = ({
    racer: { name, color, weight, length }
}: RacersItemProps) => (
    <View style={style.container}>
        <Text>{name}</Text>
        <Text>{color}</Text>
        <Text>{weight}</Text>
        <Text>{length}</Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        padding: 4,
    },
});
