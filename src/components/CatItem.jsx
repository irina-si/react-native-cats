import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    margin: 10,
  },
  innerContainer: {
    margin: 10,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    paddingBottom: 10,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  description: {},
});

export const CatItem = ({ navigation, cat }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("DetailsScreen", {
            catId: cat.catId,
            name: cat.name,
          })
        }
      >
        <View style={styles.innerContainer}>
          <View style={styles.itemHeader}>
            <View>
              <Text style={{ fontWeight: "700" }}>{cat.name}</Text>
            </View>
            <View>
              <Text>{cat.breed}</Text>
            </View>
          </View>
          <View style={styles.image}>
            <Image
              // eslint-disable-next-line no-undef
              source={cat.uri}
              style={{ width: 250, height: 130 }}
            />
          </View>
          <View style={styles.description}>
            <Text ellipsizeMode="tail" numberOfLines={2}>
              {cat.description}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
