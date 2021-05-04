import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { CatsList } from "../components/CatsList";
import { CatsContext } from "../../CatsContext";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
});

export const MainScreen = ({ navigation }) => (
  <CatsContext.Consumer>
    {(context) => (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        enabled
      >
        <LinearGradient
          style={styles.linearGradient}
          colors={["#b63228", "#681810"]}
        >
          <Header />
          <CatsList
            styles={{ backgroundColor: "white", flex: 1 }}
            cats={context.cats}
            navigation={navigation}
          />
        </LinearGradient>
      </KeyboardAvoidingView>
    )}
  </CatsContext.Consumer>
);
