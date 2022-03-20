import React, {useRef, useEffect} from 'react';
import {ScrollView, View, Text, Animated, Image} from 'react-native';
import Easing from 'react-native/Libraries/Animated/Easing';
import {ImageLinks} from '../../Assets/Images/index';
import DetailsButton from '../DetailsButton/DetailsButton';
import styles from './styles';

const DetailModal = ({showModal, description, title}) => {
  const index = useRef(new Animated.Value(0)).current;
  const modalTranslationY = index.interpolate({
    inputRange: [0, 1],
    outputRange: [800, 1],
  });
  useEffect(() => {
    Animated.loop(
      Animated.timing(index, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(),
    );
  }, [showModal]);

  return (
    <Animated.View
      style={[
        styles.container,
        {transform: [{translateY: modalTranslationY}]},
      ]}>
      <View style={styles.modalTopContainer}>
        <Text style={styles.headerText}>{title}</Text>
        <DetailsButton title={'Details'} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.descriptionText}>{description}</Text>
      </ScrollView>
    </Animated.View>
  );
};

export default DetailModal;
