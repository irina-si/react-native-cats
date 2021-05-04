import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export const Navbar = ({appTitle}) => {
  return (
    <SafeAreaView style={styles.navbar}>
      <Text style={styles.text}>{appTitle}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "white",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    paddingBottom: 10
  }
})