import { StyleSheet } from "react-native";

export const style = {
    default: StyleSheet.create({
        buttonContainer: {
            alignItems: "center",
            borderRadius: 8,
            padding: 16,
            backgroundColor: "#eb3636",
        },
        buttonText: {
            color: "#ffffff",
        }
    }),
    transparent: StyleSheet.create({
        buttonContainer: {
            alignItems: "center",
            borderRadius: 8,
            padding: 16,
        },
        buttonText: {
            fontWeight: "bold",
            color: "#eb3636",
        },
    })
};
