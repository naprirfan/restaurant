import React from 'react';
import { Text, Button, StyleSheet, Linking } from 'react-native';
import ErrorBanner from '../components/ErrorBanner';
import ResultDetailHeader from '../components/ResultDetailHeader';
import useResultDetail from '../hooks/useResultDetail';
import Address from '../components/Address';
import Phone from '../components/Phone';

const getCategoryText = (categories) => {
  if (!categories || !categories.length) return '';
  return categories.map(category => category.title).join(', ');
}

const ResultDetailScreen = ({ navigation }) => { 
  const id = navigation.getParam('id');
  const [resultDetail, errorMessage] = useResultDetail(id);

  if (errorMessage) return <ErrorBanner message={errorMessage} />

  return (
    <>
      <ResultDetailHeader data={resultDetail} />
      <Button title="See More Pictures" onPress={() => navigation.navigate('Gallery', { data: resultDetail })} />
      <Text style={styles.price}>{resultDetail.price} - {getCategoryText(resultDetail.categories)}</Text>
      <Address data={resultDetail} />
      <Phone data={resultDetail} />
    </>
  );
};

const styles = StyleSheet.create({
  price: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default ResultDetailScreen;
