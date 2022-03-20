import React from 'react';
import {View, Image} from 'react-native';
import {ImageLinks} from '../../Assets/Images/index';
import styles from './styles';

const IntroHeader = () => {
  return (
    <View style={styles.header}>
      <Image
        source={ImageLinks['Logo']}
        resizeMode={'contain'}
        style={styles.logo}
      />
    </View>
  );
};

export default React.memo(IntroHeader);
