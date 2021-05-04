import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";

const BAR_HEIGHT = 44;

export const SearchInput = ({ onChangeText, text, clearText }) => (
  <View style={styles.container}>
    <View style={{ flex: 4 }}>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => onChangeText(text)}
        value={text}
      />
    </View>
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => clearText()} title="clear">
        <Image
          style={styles.imageStyle}
          source={{
            uri:
              "https://c1.klipartz.com/pngpicture/393/978/sticker-png-bin-icon-cancel-icon-close-icon-cross-icon-delete-icon-exit-icon-minus-icon-remove-icon-trash-icon-red.png",
          }}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: BAR_HEIGHT,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
  },
  imageStyle: {
    width: 25,
    height: 25,
  },
});
