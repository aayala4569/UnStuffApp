import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../container/Card1'; // Import your Card component

const ProductView = () => {
    return (
        <View style={styles.container}>
        <Card
          title="Great Watch"
          price="$19.99"
          imageSource={require('../assets/watch1.jpg')}
        />
      </View>
    )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductView;