import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  /**
   * Filtering result by price
   * @param {*} price '$' || '$$' || '$$$' || '$$$$'
   */
  const filterResultsByPrice = (price) => {
    return results
      .filter(result => result.price === price)
      .sort((a, b) => b.rating - a.rating);
  }

  return (
    <>
        <SearchBar 
          term={term} 
          onTermChange={setTerm} 
          onTermSubmit={() => searchApi(term)}
          />
        { errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text>: null }
        <ScrollView>
          <ResultsList title="Cost Effective" results={filterResultsByPrice('€')} navigation={navigation} />
          <ResultsList title="Bit Pricier" results={filterResultsByPrice('€€')} navigation={navigation} />
          <ResultsList title="Big Spender" results={filterResultsByPrice('€€€')} navigation={navigation} />
        </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
  }
});

export default SearchScreen;
