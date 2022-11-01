import {StyleSheet} from 'react-native';
import {height, width} from '@constants';

export default StyleSheet.create({
  modal: {
    width,
    height,
    justifyContent: 'flex-start',
    margin: 0,
  },
  modalContentContainer: {
    flex: 1,
  },
  closeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 54,
    left: 16,
    right: 16,
    zIndex: 100,
  },
});
