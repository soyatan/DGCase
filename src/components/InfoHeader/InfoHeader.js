import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import styles from './styles';
import InfoItem from '../InfoItem/InfoItem';

const InfoHeader = ({infoData, loading}) => {
  return (
    <View style={styles.container} elevation={5}>
      {!loading ? (
        <FlatList
          data={infoData}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <InfoItem item={item} />;
          }}
          horizontal={true}
        />
      ) : (
        <ActivityIndicator size="small" color="#00ff00" />
      )}
    </View>
  );
};

export default InfoHeader;
