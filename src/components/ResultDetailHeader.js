import React from 'react';
import { Text, Image, View, StyleSheet, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const getCategoryText = (categories) => {
  if (!categories || !categories.length) return '';
  return categories.map(category => category.title).join(', ');
}

const getAddressText = (data) => {
  if (!data || !data.location || !data.location.display_address || !data.location.display_address.length) return '';
  return data.location.display_address.join("\n");
}

const ResultDetailHeader = ({ data }) => { 

  const addressText = getAddressText(data);

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
      {addressText ? (<View style={styles.address}>
        <Entypo style={styles.icon} name="location-pin" size={30} /> 
        <Text style={styles.addressText}>{addressText}</Text>
      </View>) : null}
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
  },
  address: {
    flexDirection: 'row'
    
  },
  addressText: {
    marginLeft: 10,
    flex: 1,
    alignSelf: 'center'
  },
  icon: {
    alignSelf: 'center',
  }

});

export default ResultDetailHeader;
