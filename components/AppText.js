import React from 'react';
import { Text,StyleSheet, Platform, Image } from 'react-native';

function AppText({children, style}) {
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Chalkboard SE'
    }
})

export default AppText;