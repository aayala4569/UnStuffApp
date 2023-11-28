import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "../components/Icon";
import color from "../config/color";

const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulledted", backgroundColor: color.primary },
  },
  {
    title: "My Message",
    icon: { name: "email", backgroundColor: color.secondary },
  },
];

const AccountsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Jose Martinez"
          subTitle="josemartinez8282@gmail.com"
          image={require("../assets/meme.png")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  background={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVerticle: 20,
  },
  screen: {
    backgroundColor: color.light,
  },
});

export default AccountsScreen;
