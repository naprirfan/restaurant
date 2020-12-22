import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ResultsCard from './ResultsCard';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        key={result => result.id}
        renderItem={({ item }) => {
          return (
            <ResultsCard result={item} />
          )
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default ResultsList;
