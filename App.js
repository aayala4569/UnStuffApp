import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import NewCard from './components/NewCard';
import Card from './components/Card';
import ListingDetailScreen from './app/screens/ListingDetailScreen';

export default function App() {
  return (
    // <ViewImageScreen/>
   <ListingDetailScreen/>
    
   
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
