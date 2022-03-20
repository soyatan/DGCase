import {StyleSheet} from 'react-native';
import {height, width} from './../../constants/Metrics';
import {Colors} from './../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainWhite,
  },
  newsContainer: {
    flex: 1,
  },
  newsMainContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 11,
      height: 11,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    height: height * 0.161,
    flex: 1,
    backgroundColor: Colors.grayBG,
  },
});

export default styles;
