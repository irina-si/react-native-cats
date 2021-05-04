import React, { useState, useCallback } from "react";
import { FlatList, View } from "react-native";
import { CatItem } from "./CatItem";

export const CatsListItems = ({ cats, navigation }) => {
  const keyExtractor = useCallback((cat) => cat.id.toString());
  const renderItem = useCallback(({ item }) => {
    return <CatItem cat={item} navigation={navigation} />;
  });
  return (
    <View>
      <FlatList
        styles={{ flex: 1 }}
        data={cats}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        keyboardDismissMode={"interactive"}
      />
    </View>
  );
};
