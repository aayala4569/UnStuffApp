import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const NewCard = ({ title, price, imageSource }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 15,
  },
  image: {
    width: 100,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10, 
    alignSelf: "center" 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
});

export default NewCard;