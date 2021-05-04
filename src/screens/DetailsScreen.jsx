import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Navbar } from "../components/Navbar";
import { CatsContext } from "../../CatsContext";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
});

export const DetailsScreen = ({ route, navigation }) => {
  const { catId } = route;

  return (
    <CatsContext.Consumer>
      {(context) => {
        const cat = context.cats.find((cat) => cat.id === 1);
        return (
          <View style={styles.container}>
            <LinearGradient
              style={styles.linearGradient}
              colors={["#b63228", "#681810"]}
            ></LinearGradient>
          </View>
        );
      }}
    </CatsContext.Consumer>
  );
};
