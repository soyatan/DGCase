import {StyleSheet} from 'react-native';
import {height, width} from '../../constants/Metrics';
import {Colors} from './../../constants/Colors';

const styles = StyleSheet.create({
  TabBarMainContainer: {
    justifyContent: 'space-around',
    height: 44,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: Colors.mainWhite,
  },
  button: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  focus_button: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: Colors.greenDarkFill,
  },
});

export default styles;
