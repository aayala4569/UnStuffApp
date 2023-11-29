import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import color from "../config/color";
import AppText from "./AppText";
import { Swipeable } from "react-native-gesture-handler";

const ListItem = ({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  ImageComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={color.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirecction: "row",
    padding: 20,
    backgroundColor: color.white
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginList: 10,
  },
  title: {
    fontWeight: "500",
    fontSize: 21,
  },
  subTitle: {
    color: color.medium,
    fontSize: 19,
  },
  detailsContainer: {
    marginleft: 10
  },
});
export default ListItem;
