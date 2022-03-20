import React from 'react';
import {View, Image} from 'react-native';
import {ImageLinks} from '../../Assets/Images/index';
import styles from './styles';
import {Icon} from './../../Assets/Svgs/icon';
import {useNavigation} from '@react-navigation/native';
import {IconPressable} from './../../Assets/Svgs/iconPressable';

const HomeHeader = () => {
  const navigation = useNavigation();
  const navIndex = navigation.getState().index;
  const onPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      {navIndex === 0 ? (
        <Icon name={'Search'} scale={5} />
      ) : (
        <IconPressable name={'Back'} scale={5} onPress={onPress} />
      )}
      <Image
        source={ImageLinks['Logo']}
        resizeMode={'contain'}
        style={{height: '75%'}}
      />
      {navIndex === 0 ? <Icon name={'User'} scale={5} /> : <View></View>}
    </View>
  );
};

export default HomeHeader;
