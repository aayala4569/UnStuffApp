import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import AccountsScreen from "./app/screens/AccountsScreen";


export default function App() {
  return (
    // <ViewImageScreen/>
    // <WelcomeScreen/>
    //  <ListingDetailScreen/>
    <GestureHandlerRootView style={{ flex: 1 }}>
     
<AccountsScreen/>
      
    </GestureHandlerRootView>
  );
}
