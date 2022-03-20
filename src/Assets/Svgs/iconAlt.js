import React from 'react';
import {View, Text} from 'react-native';
import {SVGS} from './index';
import {width} from '../../constants/Metrics';

export const IconAlt = ({name, scale}) => {
  const VecGr = SVGS[`${name}Alt`];
  const size = scale * width * 0.01;
  return (
    <View style={{width: size, height: size}}>
      <VecGr width="100%" height="100%" />
    </View>
  );
};
