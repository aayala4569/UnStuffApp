import React from "react";
import { View, StyleSheet } from "react-native";
import color from "../config/color";

const ListItemSeparator = () => {
  return (
    <div>
      <View style={styles.separator} />
    </div>
  );
};

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: color.secondary,
  },
});

export default ListItemSeparator;
