import {StyleSheet} from 'react-native';
import {height, width} from '../../constants/Metrics';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: height * 0.02,
    marginBottom: height * 0.03,
    width: width * 0.1,
    justifyContent: 'space-between',
  },
});

export default styles;
