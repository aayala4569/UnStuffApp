import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import color from '../config/color';
import { AntDesign } from '@expo/vector-icons';





function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
       
            <View style={ styles.closeIcon}>
                <AntDesign name="closesquare" size={40} color="black" />
            </View>
             
            <View style={ styles.deleteIcon}>
                <AntDesign name="delete" size={40} color="black" />
            </View>
            <Image resizeMode='contain' style={styles.image} source={require('../assets/oldChair.jpg')}/>
        </View>
        
    );
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    container: {
        backgroundColor: color.black,
        flex: 1,
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: color.primary,
        position: 'absolute',
        top: 60,
        left: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: color.secondary,
        position: 'absolute',
        top: 60,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
export default ViewImageScreen;