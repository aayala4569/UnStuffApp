import React from "react";
import color from "../config/color";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function AppButton({ title, color = "primary", onPress,style }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color[color] }, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: color.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: color.white,
    fontSize: 24,
    textTransform: "uppercase",
    fontweight: "bold",
  },
});
export default AppButton;
