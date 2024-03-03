import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Racer } from "../../types/racer";
import { racersListItemStyle } from "./styles";

type RacersItemProps = {
    racer: Racer;
};

export const RacersListItem = ({
    racer: { name, color, weight, length, running, winLikelihood }
}: RacersItemProps) => (
    <View style={racersListItemStyle.container}>
        <View style={racersListItemStyle.itemContainer}>
            <View>
                <Text style={[racersListItemStyle.title, { color: color.toLowerCase() }]}>{name}</Text>
                <View style={racersListItemStyle.properties}>
                    <Text>Weight: {weight}</Text>
                    <Text>Length: {length}</Text>
                </View>
            </View>
            <View>
                {running ? <ActivityIndicator color={"#eb3636"} /> : <Text>{winLikelihood ? ((winLikelihood || 0) * 100).toFixed(2) + "%" : ""}</Text>}
            </View>
        </View>
    </View>
);
