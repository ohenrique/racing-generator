import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ApolloClient from "./src/config/apollo-client";
import { RaceScreen } from "./src/pages/RaceScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="race"
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTitleContainerStyle: {
            paddingTop: 22,
          },
          headerTitleStyle: {
            fontSize: 22,
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="race"
          component={RaceScreen}
          options={{ title: "🏁 Racing Generator 🏁" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
