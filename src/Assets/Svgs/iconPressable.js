import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {SVGS} from './index';
import {width} from '../../constants/Metrics';

export const IconPressable = ({name, scale, onPress}) => {
  const VecGr = SVGS[name];
  const size = scale * width * 0.01;
  return (
    <TouchableOpacity onPress={onPress} style={{width: size, height: size}}>
      <VecGr width="100%" height="100%" />
    </TouchableOpacity>
  );
};
