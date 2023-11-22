import React from "react";
import { StyleSheet, Image, View } from "react-native";
import color from "../config/Color";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <AntDesign name="closesquare" size={40} color="black" />
      </View>

      <View style={styles.deleteIcon}>
        <AntDesign name="delete" size={40} color="black" />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/oldChair.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: color.primary,
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    top: 60,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 60,
    right: 30,
  },
});
export default ViewImageScreen;
