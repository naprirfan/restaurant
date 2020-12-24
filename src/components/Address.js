import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const getAddressText = (data) => {
  if (!data || !data.location || !data.location.display_address || !data.location.display_address.length) return '';
  return data.location.display_address.join("\n");
}

const Address = ({ data, navigation }) => { 
  const addressText = getAddressText(data);
  if (!addressText) return null;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Map', { data })}>
      <View style={styles.address}>
        <Entypo style={styles.icon} name="location-pin" size={30} /> 
        <Text style={styles.addressText}>{addressText}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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

export default withNavigation(Address);
