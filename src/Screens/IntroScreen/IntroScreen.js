import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import IntroTextContainer from '../../components/IntroTextContainer/IntroTextContainer';
import IndicatorContainer from '../../components/IndicatorContainer/IndicatorContainer';
import Button from '../../components/Button/Button';
import IntroHeader from './../../components/IntroHeader/IntroHeader';
import {introdata} from '../../Data/introdata';

const IntroScreen = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIntro, setActiveIntro] = useState(introdata[0]);
  const [buttonTitle, setButtonTitle] = useState('Next');

  const onPress = () => {
    if (activeIndex === 0) {
      setActiveIndex(1);
      setActiveIntro(introdata[1]);
    } else if (activeIndex === 1) {
      setActiveIndex(2);
      setActiveIntro(introdata[2]);
      setButtonTitle('Enter');
    }
  };
  const directToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <IntroHeader />
      <ImageContainer imageName={activeIntro.imageName} />
      <IntroTextContainer
        paragraph={activeIntro.text}
        header={activeIntro.header}
      />
      <IndicatorContainer activeIndex={activeIndex} />
      <Button
        onPress={activeIndex !== 2 ? onPress : directToHome}
        title={buttonTitle}
      />
    </View>
  );
};

export default IntroScreen;
