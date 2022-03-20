import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, ImageBackground, ActivityIndicator} from 'react-native';
import styles from './styles';
import DetailModal from './../../components/DetailModal/DetailModal';

const DetailScreen = ({route, navigation}) => {
  const isFocused = useIsFocused();
  const [item, setitem] = useState();
  const [showModal, setShowModal] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        setShowModal(false);
        const {item} = route.params;
        setitem(item);
        setTimeout(() => {
          setShowModal(true);
        }, 300);
      });

      return () => unsubscribe();
    }, [isFocused]),
  );

  if (item) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{uri: item.image}}
          resizeMode={'cover'}
          style={styles.image}>
          {showModal ? (
            <DetailModal
              showModal={showModal}
              title={item.title}
              description={item.description}
            />
          ) : null}
        </ImageBackground>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color="#00ff00" />
      </View>
    );
  }
};

export default DetailScreen;
