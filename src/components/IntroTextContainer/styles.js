import {StyleSheet} from 'react-native';
import {height, width} from '../../constants/Metrics';
import {Colors} from './../../constants/Colors';
import {Families} from './../../constants/Fonts';

const styles = StyleSheet.create({
  textContainer: {
    marginTop: height * 0.03,
    alignItems: 'center',
    width: '75%',
  },
  headerText: {
    fontWeight: 'bold',
    fontFamily: Families.avenirBold,
    fontSize: 22,
    lineHeight: 30,
    marginBottom: height * 0.01,
    color: Colors.greenText,
  },
  normalText: {
    fontWeight: '300',
    fontFamily: Families.avenirRegular,
    fontSize: 14,
    lineHeight: 22,
    color: Colors.blueTextDark,
  },
});

export default styles;
