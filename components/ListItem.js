import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import color from '../app/config/color';
import AppText from './AppText';




const ListItem = ({title, subTitle, image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image}/>
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirecction: "row"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginList: 10
    },
    title: {
        fontWeight: '500',
        fontSize: 21,
    },
    subTitle: {
        color: color.medium,
        fontSize: 19

    }
})
export default ListItem
