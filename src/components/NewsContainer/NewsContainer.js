import React from 'react';
import {View, Image, Text} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';

import styles from './styles';
import DetailsButton from './../DetailsButton/DetailsButton';
import {useNavigation} from '@react-navigation/native';

const NewsContainer = ({item}) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Details', {item});
  };
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.image}}
        style={styles.image}
        resizeMode={'cover'}
      />
      <Text numberOfLines={1} style={styles.titleText}>
        {item.title}
      </Text>
      <View style={styles.newsDetailscontainer}>
        <DetailsButton onPress={onPress} />
        <View style={styles.dateContainer}>
          <Icon name={'Date'} scale={4} />
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
        <View style={styles.likecontainer}>
          <Text style={styles.likeText}>{item.likes}</Text>
          <Icon name={'Like'} scale={3} />
        </View>
      </View>
    </View>
  );
};

export default NewsContainer;
