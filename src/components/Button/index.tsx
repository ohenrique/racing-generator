import React from "react";
import { Pressable, Text } from "react-native";
import { style } from "./styles";

export type ButtonProps = {
    title: string;
    onPress?: () => void;
};

export const Button = ({ title, onPress }: ButtonProps) => (
    <Pressable onPress={onPress} style={style.buttonContainer}>
        <Text style={style.buttonText}>{title}</Text>
    </Pressable>
);
