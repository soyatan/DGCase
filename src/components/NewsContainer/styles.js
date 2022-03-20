import {StyleSheet} from 'react-native';
import {height, width} from '../../constants/Metrics';
import {Colors} from './../../constants/Colors';
import {Families} from './../../constants/Fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainWhite,
    margin: 15,
    borderRadius: width * 0.05,
    height: height * 0.5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: height * 0.35,
    backgroundColor: 'gray',
    overflow: 'hidden',
    borderRadius: (width * 0.05) / 2,
    overflow: 'hidden',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: width * 0.1,
  },
  likecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    color: Colors.greenText,
    fontFamily: Families.avenirBold,
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: height * 0.015,
    marginBottom: height * 0.01,
  },
  likeText: {
    color: Colors.redText,
    fontSize: 11,
    paddingRight: 4,
    fontFamily: Families.avenirRegular,
  },
  dateText: {
    color: Colors.grayText,
    fontSize: 12,
    paddingLeft: 4,
    fontFamily: Families.avenirRegular,
  },
  newsDetailscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10,
  },
});

export default styles;
