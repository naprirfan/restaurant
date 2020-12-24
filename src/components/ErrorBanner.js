import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ErrorBanner = ({
    message,
}) => (
    <View>
        <Text style={styles.errorMessage}>{message}</Text>
    </View>
);

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
  }
});

export default ErrorBanner;
