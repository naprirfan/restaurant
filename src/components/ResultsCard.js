import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ResultsCard = ({ result }) => {
  return (
    <View>
        <Text>{ result.name }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
});

export default ResultsCard;
