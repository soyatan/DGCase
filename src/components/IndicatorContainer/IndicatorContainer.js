import React from 'react';
import {View, Image} from 'react-native';
import {ImageLinks} from '../../Assets/Images/index';
import styles from './styles';
import {Icon} from './../../Assets/Svgs/icon';

const IndicatorContainer = ({activeIndex}) => {
  return (
    <View style={styles.container}>
      <Icon name={activeIndex === 0 ? 'Circle' : 'CircleEmpty'} scale={2.2} />
      <Icon name={activeIndex === 1 ? 'Circle' : 'CircleEmpty'} scale={2.2} />
      <Icon name={activeIndex === 2 ? 'Circle' : 'CircleEmpty'} scale={2.2} />
    </View>
  );
};

export default IndicatorContainer;
