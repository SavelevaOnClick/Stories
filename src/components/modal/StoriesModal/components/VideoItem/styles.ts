import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  flexContainer: {
    flex: 1,
  },
  video: {
    flex: 1,
    zIndex: 5,
    backgroundColor: '#000',
  },
});
