import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ErrorBanner from '../components/ErrorBanner';
import ResultDetailHeader from '../components/ResultDetailHeader';
import useResultDetail from '../hooks/useResultDetail';
import Address from '../components/Address';

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
      <Text style={styles.price}>{resultDetail.price} - {getCategoryText(resultDetail.categories)}</Text>
      <Address data={resultDetail} />
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
