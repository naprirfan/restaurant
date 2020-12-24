import React from 'react';
import { Text, Linking, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Phone = ({ data }) => (
  <TouchableOpacity>
    <View style={styles.phone}>
      <Entypo style={styles.icon} name="phone" size={30} /> 
      <Text style={styles.text} onPress={() => Linking.openURL(`tel:${data.phone}`)}>{data.display_phone}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  phone: {
    flexDirection: 'row'
  },
  text: {
    marginLeft: 10,
    flex: 1,
    alignSelf: 'center'
  },
  icon: {
    alignSelf: 'center',
  }
});

export default Phone;
