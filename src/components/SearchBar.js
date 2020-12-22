import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => (
  <View style={styles.wrapper}>
    <Feather name="search" size={30} />
    <TextInput style={styles.textInput} placeholder="Search" />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    marginLeft: 15,
    fontSize: 18
  }
});

export default SearchBar;
