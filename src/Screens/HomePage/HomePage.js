import React, {useEffect, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './styles';
import InfoHeader from './../../components/InfoHeader/InfoHeader';
import NewsContainer from '../../components/NewsContainer/NewsContainer';
import {newsdata} from '../../Data/newsdata';

const HomePage = () => {
  const [infoData, setInfoData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInfoData = async () => {
    const resp = await fetch('https://fakestoreapi.com/products');
    const data = await resp.json();
    setInfoData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchInfoData();
  }, []);

  return (
    <View style={styles.container}>
      <InfoHeader infoData={infoData} loading={loading} />
      <View style={styles.newsMainContainer} elevation={5}>
        <FlatList
          data={newsdata}
          showsVerticalScrollIndicator={false}
          style={styles.newsContainer}
          renderItem={({item}) => {
            return <NewsContainer item={item} />;
          }}
        />
      </View>
    </View>
  );
};

export default HomePage;
