import React from "react";
import { Pressable, Text } from "react-native";
import { style } from "./styles";

export type ButtonProps = {
    title: string;
    type?: ButtonType;
    onPress?: () => void;
    disabled?: boolean;
};

export type ButtonType = "default" | "transparent";

export const Button = ({ title, onPress, disabled, type = "default" }: ButtonProps) => (
    <Pressable onPress={onPress} style={style[type].buttonContainer} disabled={disabled}>
        <Text style={style[type].buttonText}>{title}</Text>
    </Pressable>
);
