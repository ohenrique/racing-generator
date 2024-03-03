import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        padding: 12,
        gap: 16
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 10, // Required for Android 
        gap: 8
    },
    status: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export const racersListItemStyle = StyleSheet.create({
    container: {
        padding: 4,
        gap: 2,
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: { fontWeight: "bold" },
    properties: {
        flexDirection: "row",
        gap: 10
    }
});
