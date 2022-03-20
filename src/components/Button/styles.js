import {StyleSheet} from 'react-native';
import {height, width} from '../../constants/Metrics';
import {Colors} from './../../constants/Colors';
import {Families} from './../../constants/Fonts';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.greenFill,
    width: '70%',
    height: width * 0.1,
    borderRadius: width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.mainWhite,
    fontSize: 18,
    fontFamily: Families.avenirBold,
  },
});

export default styles;
