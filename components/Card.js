import React from "react";
import {View, StyleSheet, Image} from 'react-native';
import AppText from './AppText';
import color from "../app/config/color";


const Card = ({title, subTitle, image}) => {
    return (
        <View style={StyleSheet.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: color.white,
        marginBottom: 20,
        overflow: "hidden",

    },
    image: {
        width: "100%",
        height: 400,
    },
    title: {
        marginBottom: 7,
        fontSize: 30
    },
    subTitle: {
        color: color.secondary,
        fontWeight: 'bold',
        fontSize: 28
        
    }
})

export default Card

