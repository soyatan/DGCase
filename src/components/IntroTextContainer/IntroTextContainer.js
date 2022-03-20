import React from 'react';
import {View, Text} from 'react-native';
import {ImageLinks} from '../../Assets/Images/index';
import styles from './styles';

const IntroTextContainer = ({header, paragraph}) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.headerText}>{header}</Text>
      <Text numberOfLines={4} style={styles.normalText}>
        {paragraph}
      </Text>
    </View>
  );
};

export default IntroTextContainer;
