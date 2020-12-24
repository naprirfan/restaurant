import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import ErrorBanner from '../components/ErrorBanner';
import ResultDetailHeader from '../components/ResultDetailHeader';
import useResultDetail from '../hooks/useResultDetail';

const ResultDetailScreen = ({ navigation }) => { 
  const id = navigation.getParam('id');
  const [resultDetail, errorMessage] = useResultDetail(id);

  console.log(resultDetail);

  if (errorMessage) return <ErrorBanner message={errorMessage} />

  return (
    <>
      <ResultDetailHeader data={resultDetail} />
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default ResultDetailScreen;
