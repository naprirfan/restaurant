import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => { 
  return (
    <View style={styles.wrapper}>
      <Feather name="search" size={30} />
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        style={styles.textInput} 
        placeholder="Search" 
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

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
    fontSize: 18,
    flex: 1
  }
});

export default SearchBar;
