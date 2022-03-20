import {StyleSheet} from 'react-native';
import {height, width} from '../../constants/Metrics';
import {Colors} from './../../constants/Colors';
import {Families} from './../../constants/Fonts';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    width: width * 0.15,

    alignItems: 'center',
  },
  imageContainerOuter: {
    height: width * 0.125,
    width: width * 0.125,
    borderRadius: width,
    borderColor: Colors.greenBorder,
    //padding: 4,
    borderWidth: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  imageContainerInner: {
    height: width * 0.11,
    width: width * 0.11,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: width,
  },
  textContainer: {alignItems: 'center'},

  image: {
    width: '100%',
    borderRadius: width,
    height: '100%',
  },
  text: {
    fontSize: 11,
    color: Colors.grayText,
    textAlign: 'center',
    fontFamily: Families.avenirRegular,
  },
});

export default styles;
