import {StyleSheet} from 'react-native';
import {height, width} from '../../constants/Metrics';
import {Colors} from './../../constants/Colors';
import {Families} from './../../constants/Fonts';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: width * 0.3,
    borderRadius: width * 0.1,
    borderColor: Colors.greenLightBorder,
    height: 25,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.greenText,
    fontFamily: Families.avenirRegular,
    fontSize: 12,
  },
});

export default styles;
