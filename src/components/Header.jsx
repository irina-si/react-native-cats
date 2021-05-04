import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Header = () => (
  <View style={styles.header}>
    <Text style={styles.text}>Hello, I am Header!</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {},
  text: {
    fontSize: 16,
  },
});
