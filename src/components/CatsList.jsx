import React, { useState } from "react";
import { InputAccessoryView } from "react-native";
import { SearchInput } from "./SearchInput";
import { CatsListItems } from "./CatsListItems";

export const CatsList = ({ cats, navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [currentCats, setCurrentCats] = React.useState([...cats]);

  const clearText = () => {
    onChangeText("");
    setCurrentCats([...cats]);
  };

  const onChangeSearch = (text) => {
    onChangeText(text);
    searchFilterFunction(text);
  };

  const searchFilterFunction = (text) => {
    const newData = cats.filter((cat) => {
      const itemData = cat.name.toUpperCase();
      const textData = text.trim().toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setCurrentCats([...newData]);
  };
  return (
    <>
      <CatsListItems cats={currentCats} navigation={navigation} />
      <InputAccessoryView backgroundColor="#fffffff7">
        <SearchInput
          onChangeText={onChangeSearch}
          text={text}
          clearText={clearText}
        />
      </InputAccessoryView>
    </>
  );
};
