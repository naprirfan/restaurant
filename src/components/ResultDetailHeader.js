import React from 'react';
import { Text, Image, View, StyleSheet, Dimensions, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const ResultDetailHeader = ({ data, navigation }) => { 

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
      <Button title="See More Pictures" onPress={() => navigation.navigate('Gallery', { data })} />
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
  button: {
    fontSize: 16,
    width: 200,
    color: '#CCC'
  }
});

export default withNavigation(ResultDetailHeader);
