import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles';

const InfoItem = ({item}) => {
  const onPress = () => {
    console.log(item.description);
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainerOuter}>
        <View style={styles.imageContainerInner}>
          <Image
            source={{uri: item.image}}
            resizeMode={'contain'}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={2}>
          {item.category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default InfoItem;
