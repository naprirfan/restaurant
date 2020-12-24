import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ErrorBanner from '../components/ErrorBanner';
import useResultDetail from '../hooks/useResultDetail';

const ResultDetailScreen = ({ navigation }) => { 
  const id = navigation.getParam('id');
  const [resultDetail, errorMessage] = useResultDetail(id);

  console.log(resultDetail);

  if (errorMessage) return <ErrorBanner message={errorMessage} />

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default ResultDetailScreen;
