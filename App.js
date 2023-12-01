import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import "react-native-gesture-handler";
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import AccountsScreen from "./app/screens/AccountsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppSwitch from "./app/components/AppSwitch";
import AppPicker from "./app/components/AppPicker";
import AppPicker2 from "./app/components/AppPicker2";

const categories =[
  {
    lable: 'Furniture', value: 1
  },
  {
    lable: 'Clothing', value: 2
  },
  {
    lable: 'Camera', value: 3
  }
]

export default function App() {

  const [firstName, setFirstName] = useState("This is our original text")
  return (
    // <ViewImageScreen/>
    // <WelcomeScreen/>
    //  <ListingDetailScreen/>
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Screen>
      <AppPicker2 items={categories} icon="apps" placeholder="category"/>
      <AppTextInput icon="email" placeholder="email"/>
    </Screen>
    </GestureHandlerRootView>

  );
}
