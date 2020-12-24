import React from 'react';
import Gallery from 'react-native-image-gallery';

const getFormattedImageObject = (photos) => {
  return photos.map(photo => {
    return {
      source: {
        uri: photo,
      }
    }
  })
}

const GalleryScreen = ({ navigation }) => { 
  const data = navigation.getParam('data');
  if (!data || !data.photos || !data.photos.length) return null;

  const formattedImageObject = getFormattedImageObject(data.photos);

  return (
    <Gallery
      style={{ flex: 1, backgroundColor: 'black' }}
      images={formattedImageObject}
    />
  )
};

export default GalleryScreen;
