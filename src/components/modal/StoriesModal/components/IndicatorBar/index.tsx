import React from 'react';
import {View} from '@components';
import {width} from '@constants';
import {TStory} from '@types';
import Indicator from '../Indicator';
import styles from './styles';

type TProps = {
  story: TStory[];
  activeItem: number;
  duration: number;
  goNextStoryItem: () => void;
  isActiveBar: boolean;
};

const IndicatorBar: React.FC<TProps> = ({story, activeItem, duration, goNextStoryItem, isActiveBar}) => {
  return (
    <View style={styles.container}>
      {story.map((item, index) => {
        return (
          <Indicator
            isActiveBar={isActiveBar}
            index={index}
            activeIndex={activeItem}
            duration={duration}
            goNext={goNextStoryItem}
            width={width / story.length}
            key={`${item.image}${index}`}
          />
        );
      })}
    </View>
  );
};

export default IndicatorBar;
