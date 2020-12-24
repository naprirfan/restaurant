import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

const ResultsCard = ({ result }) => {
  return (
    <View style={styles.wrapper}>
      <Image 
        source={{
          uri: result.image_url
        }} 
        style={styles.image}
      />
      <Text style={styles.name}>{ result.name }</Text>
      <Text>{result.rating} Stars, { result.review_count } Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 10,
    marginVertical: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default ResultsCard;
