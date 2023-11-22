import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import NewCard from './components/NewCard';
import Card from './components/Card';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
  return (
    // <ViewImageScreen/>
  //  <ListingDetailScreen/>
    
   <MessagesScreen/>
    // <WelcomeScreen/>
    // <View style={styles.container}>
    //   <Text>Hello World!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
