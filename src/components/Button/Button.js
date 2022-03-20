import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ImageLinks} from '../../Assets/Images/index';
import styles from './styles';

const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
