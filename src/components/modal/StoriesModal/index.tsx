import React from 'react';
import {Carousel, Icon, Modal, Pressable, View} from '@components';
import {height, width} from '@constants';
import {useCallback, useRef} from '@hooks';
import {TStoryMain} from '@types';
import {StoriesItem} from './components';
import styles from './styles';

type TProps = {
  visible: boolean;
  storiesData: TStoryMain[];
  activeItemIndex: number;
  setActiveItemIndex: (index: number) => void;
  setVisible: (visible: boolean) => void;
};

const StoriesModal: React.FC<TProps> = ({visible, storiesData, activeItemIndex, setActiveItemIndex, setVisible}) => {
  const CarouselInnerRef = useRef<Carousel<TStoryMain>>(null);

  const onPressClose = useCallback(() => {
    setVisible(false);
  }, []);

  const renderItem = useCallback(
    ({item, index}: {item: TStoryMain; index: number}) => {
      return (
        <StoriesItem
          story={item.stories}
          goNext={goNext}
          index={index}
          activeStoryIndex={activeItemIndex}
          goPrev={goPrev}
        />
      );
    },
    [activeItemIndex],
  );

  const goNext = useCallback(() => {
    if (activeItemIndex !== storiesData.length - 1) {
      setActiveItemIndex(activeItemIndex + 1);
      CarouselInnerRef.current?.snapToItem(activeItemIndex + 1);
    } else {
      onPressClose();
    }
  }, [activeItemIndex]);

  const goPrev = useCallback(() => {
    setActiveItemIndex(activeItemIndex - 1);
    CarouselInnerRef.current?.snapToItem(activeItemIndex - 1);
  }, [activeItemIndex, CarouselInnerRef.current]);

  const onSnapToItem = useCallback((slideIndex: number) => setActiveItemIndex(slideIndex), []);

  return (
    <Modal isVisible={visible} style={styles.modal} deviceWidth={width} deviceHeight={height}>
      <View style={styles.modalContentContainer}>
        <View style={styles.closeButtonContainer}>
          <Pressable onPress={onPressClose}>
            <Icon name="Close" size={34} color={'#fff'} />
          </Pressable>
        </View>
        <Carousel
          ref={CarouselInnerRef}
          data={storiesData}
          enableMomentum={false}
          autoplayInterval={5000}
          lockScrollWhileSnapping={true}
          renderItem={renderItem}
          sliderWidth={width}
          firstItem={activeItemIndex}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          itemWidth={width}
          sliderHeight={height}
          onSnapToItem={onSnapToItem}
          itemHeight={height}
        />
      </View>
    </Modal>
  );
};

export default StoriesModal;
