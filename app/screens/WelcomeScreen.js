import React from 'react';
import { View, ImageBackground, StyleSheet, loginButton, registerButton, Text, Image, logo, tagline} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
      source={require('../assets/LivingRoom.jpg')}
      style={styles.backgroundImage}>  
      <Image style={styles.logo} source={require('../assets/UnStuffLogo.png')}/>
      <Text style={styles.tagline}>Unstuff Your Life</Text>
      <View style={styles.loginButton}/>
      <View style={styles.registerButton}/>

     </ImageBackground>
     

           );
}
const styles = StyleSheet.create({


  
    backgroundImage: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'blue',
        
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'hotpink',
    },
    logo:{
        width:200,
        height: 200,
        position: 'absolute',
        top: 80
    },
    tagline: {
        bottom: 400,
    }
  });
          
      
    

export default WelcomeScreen;