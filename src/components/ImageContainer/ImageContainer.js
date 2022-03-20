import React from 'react';
import {View, Image} from 'react-native';
import {ImageLinks} from '../../Assets/Images/index';
import styles from './styles';

const ImageContainer = ({imageName}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={ImageLinks[imageName]}
        resizeMode={'contain'}
        style={styles.image}
      />
    </View>
  );
};

export default ImageContainer;
