import React, {useEffect, useRef} from 'react';
import Video, {OnLoadData} from 'react-native-video';
import {ActivityIndicator, Image, TouchableOpacity, View} from '@components';
import {width} from '@constants';
import {useCallback, useState} from '@hooks';
import {setLoading} from '@reducers/additional';
import {TStory} from '@types';
import Indicator from '../Indicator';
import IndicatorBar from '../IndicatorBar';
import VideoItem from '../VideoItem';
import styles from './styles';
import ImageItem from '../ImageItem';

type TProps = {
  story: TStory[];
  goNext: () => void;
  goPrev: () => void;
  index: number;
  activeStoryIndex: number;
};


const StoriesItem: React.FC<TProps> = ({story, goNext, index, activeStoryIndex, goPrev}) => {
  const [activeItemStoryIndex, setActiveItemStoryIndex] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const goNextStoryItem = useCallback(() => {
    setDuration(0);
    if (activeItemStoryIndex < story.length - 1) {
      setActiveItemStoryIndex(activeItemStoryIndex + 1);
    } else {
      goNext();
    }
  }, [activeItemStoryIndex, activeStoryIndex]);

  const goPrevStoryItem = useCallback(() => {
    if (activeStoryIndex || activeItemStoryIndex) {
      setDuration(0);
      activeItemStoryIndex !== 0 ? setActiveItemStoryIndex(activeItemStoryIndex - 1) : goPrev();
    }
  }, [activeItemStoryIndex, activeStoryIndex]);

  useEffect(() => {
    if (story[activeItemStoryIndex].image) {
      setDuration(5000);
    }
  }, [activeItemStoryIndex, activeStoryIndex]);

  useEffect(() => {
    setActiveItemStoryIndex(0);
  }, [activeStoryIndex]);

  return (
    <View style={styles.container}>
      {story[activeItemStoryIndex].image ? (
        <ImageItem url={story[activeItemStoryIndex].image ?? ''} />
      ) : (
        <VideoItem url={story[activeItemStoryIndex].video ?? ''} setDuration={setDuration} />
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goPrevStoryItem} />
        <TouchableOpacity style={styles.button} onPress={goNextStoryItem} />
      </View>
      <View style={styles.indicatorBarContainer}>
        <IndicatorBar
          story={story}
          activeItem={activeItemStoryIndex}
          duration={duration}
          goNextStoryItem={goNextStoryItem}
          isActiveBar={index === activeStoryIndex}
        />
      </View>
    </View>
  );
};

export default StoriesItem;
