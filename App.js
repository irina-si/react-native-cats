import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StyleSheet, Text, View } from "react-native";
import { MainScreen } from "./src/screens/MainScreen";
import { DetailsScreen } from "./src/screens/DetailsScreen";
import { CatsContext } from "./CatsContext";

const DATA = {
  cats: [
    {
      id: 1,
      name: "Габи",
      breed: "Абиссинская кошка",
      age: "5 месяцев",
      description:
        "Эти кошки становятся похожими на пантеру, когда начинают играть или заниматься чем-либо.",
      uri: require("./src/images/first.png"),
    },

    {
      id: 2,
      name: "Черныш",
      breed: "Девон-рекс",
      age: "10 месяцев",
      description: `Эти кошки с "эльфийскими" ушами мастера лазанья: они любят проводить время на всевозможных шкафах, полках, возвышенностях.`,
      uri: require("./src/images/first.png"),
    },
    {
      id: 3,
      name: "Черныш",
      breed: "Девон-рекс",
      age: "10 месяцев",
      description: `Эти кошки с "эльфийскими" ушами мастера лазанья: они любят проводить время на всевозможных шкафах, полках, возвышенностях.`,
      uri: require("./src/images/first.png"),
    },
    {
      id: 4,
      name: "Черныш",
      breed: "Девон-рекс",
      age: "10 месяцев",
      description: `Эти кошки с "эльфийскими" ушами мастера лазанья: они любят проводить время на всевозможных шкафах, полках, возвышенностях.`,
      uri: require("./src/images/first.png"),
    },
  ],
  facts: [
    `Кошки неважно различают вкус еды. Согласно исследованию 2006 года, 
    они — одни из немногих млекопитающих, которые не имеют вкусовых рецепторов для сладкого.`,
    `Кошки и моряки дружат очень давно: 
    в течение многих столетий кошек брали в море для борьбы с крысами и как талисман, приносящий удачу.`,
  ],
  appTitle: "Коты",
};

const Stack = createStackNavigator();

export default function App() {
  const [state, setState] = useState({ ...DATA });
  return (
    <CatsContext.Provider value={state}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{ title: "Коты" }}
          />
          <Stack.Screen
            name="DetailsScreen"
            component={DetailsScreen}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CatsContext.Provider>
  );
}

{
  /* <View style={styles.container}>
      <MainScreen appTitle={state.appTitle} cats={state.cats} />
    </View>
  ); */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b51b33",
  },
});
