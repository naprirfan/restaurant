import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ navigation }) => {
  const data = navigation.getParam('data');
  if (!data || !data.coordinates || !data.coordinates.longitude) return null;

  return (
    <View>
      <MapView style={styles.map}
        initialRegion={{
          latitude: data.coordinates.latitude,
          longitude: data.coordinates.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          <Marker
            coordinate={data.coordinates}
            title={data.name}
          />
        </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;
