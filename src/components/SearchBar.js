import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => (
  <View style={styles.background}>
    <Feather name="search" />
    <Text>SearchBar</Text>
  </View>
);

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    margin: 15,
  }
});

export default SearchBar;
