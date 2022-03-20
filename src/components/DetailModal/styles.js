import {StyleSheet} from 'react-native';
import {height, width} from '../../constants/Metrics';
import {Colors} from './../../constants/Colors';
import {Families} from './../../constants/Fonts';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: Colors.mainWhite,
    width: '100%',
    bottom: 0,
    height: height * 0.5,
    borderTopRightRadius: width * 0.05,
    borderTopLeftRadius: width * 0.05,
    padding: 20,
  },
  headerText: {
    fontSize: 22,
    color: Colors.greenText,
    marginBottom: 20,
    fontFamily: Families.avenirBold,
  },
  modalTopContainer: {
    marginBottom: 10,
  },
  descriptionText: {
    fontFamily: Families.helveticaMedium,
    fontSize: 13,
    paddingTop: 10,
    color: Colors.grayTextDark,
  },
});

export default styles;
