import {StyleSheet} from 'react-native';
import {height, width} from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    width,
    height,
    zIndex: 10,
  },
  button: {
    width: width / 2,
    height,
  },
  indicatorBarContainer: {
    position: 'absolute',
    top: 44,
    flexDirection: 'row',
    zIndex: 15,
  },
});
