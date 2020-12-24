import React from 'react';
import { Text, Image, View, StyleSheet, Dimensions } from 'react-native';

const getCategoryText = (categories) => {
  if (!categories || !categories.length) return '';
  return categories.map(category => category.title).join(', ');
}

const ResultDetailHeader = ({ data }) => { 
  return (
    <View>
      <Image
        source={{
          uri: data.image_url,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.rating}>{data.rating} Rating, {data.review_count} Review</Text>
      <Text style={styles.price}>{data.price} - {getCategoryText(data.categories)}</Text>
    </View>
  )
}

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
  image: {
    width: imageWidth,
    height: imageHeight,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    position: 'absolute',
    top: imageHeight - 80,
    left: 10,
    color: 'white',
  },
  rating: {
    fontSize: 18,
    position: 'absolute',
    top: imageHeight - 50,
    left: 10,
    color: 'white',
  },
  price: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 16,
  }

});

export default ResultDetailHeader;
