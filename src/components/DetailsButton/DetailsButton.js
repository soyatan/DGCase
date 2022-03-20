import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const DetailsButton = ({onPress, title}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress ? onPress : null}>
      <Text style={styles.text}>{!title ? 'Click for details' : title}</Text>
    </TouchableOpacity>
  );
};

export default DetailsButton;
