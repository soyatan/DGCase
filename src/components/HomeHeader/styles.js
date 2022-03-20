import {StyleSheet} from 'react-native';
import {height, width} from '../../constants/Metrics';

const styles = StyleSheet.create({
  container: {
    height: height * 0.11,
    width: width,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export default styles;
