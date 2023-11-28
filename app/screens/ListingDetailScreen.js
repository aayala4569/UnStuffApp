import React from "react";
import { View, Image, StyleSheet } from "react-native";
import color from "../config/color";
import ListItem from "../components/ListItem";
import AppText from "../components/AppText";

const ListingDetailScreen = (props) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/jeanJacket.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>
          Great looking jean jacket for sale.
        </AppText>
        <AppText style={styles.price}>$100</AppText>

        <ListItem
          image={require("../assets/meme.png")}
          title="Angelica Ayala"
          subTitle="12 Listings"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 700,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 21,
    fontWeight: "500",
  },
  price: {
    fontSize: 30,
    color: color.secondary,
    marginVertical: 10,
  },
});
export default ListingDetailScreen;
