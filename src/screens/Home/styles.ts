import {StyleSheet} from 'react-native';
import {height, width} from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  storiesContainer: {
    height: 100,
  },
  storyItemContainer: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginHorizontal: 10,
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
});
