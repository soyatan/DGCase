import {StyleSheet} from 'react-native';
import {height, width} from './../../constants/Metrics';
import {Colors} from './../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grayBG,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: width * 1,
    height: '100%',
    backgroundColor: 'red',
  },
});

export default styles;
