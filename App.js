import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import NewCard from './components/NewCard';
import Card from './components/Card';

export default function App() {
  return (
    // <ViewImageScreen/>
    <View style={{backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100}}>
      <Card title="Jean Jacket for Sale" subTitle="$100" image={require('./app/assets/jeanJacket.jpg')}/>
    </View>
    
   
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
