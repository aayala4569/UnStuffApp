import React from 'react';
import { TouchableOpacity, onPress, Text, StyleSheet, View } from 'react-native';
import color from '../app/config/color';
const NewButton = () => {
  return (
    <View style={styles.buttonContainer}>
      {/* <View style={styles.loginButton}>
        <Text>Login</Text>
      </View> */}
      {/* <View style={styles.registerButton}>

        <Text>Register</Text>
      </View> */}

    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
    
},
registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: color.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    

},
text: {
  color: "white"
}
 
});

export default NewButton;
