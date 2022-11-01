import React from 'react';
import {Animated, runOnJS, View, withTiming} from '@components';
import {useMemo, useEffect, useSharedValue, useAnimatedStyle} from '@hooks';
import styles from './styles';

type TProps = {
  width: number;
  index: number;
  activeIndex: number;
  duration: number;
  isActiveBar: boolean;
  goNext: () => void;
};

const Indicator: React.FC<TProps> = ({
  width,
  duration,
  isActiveBar,
  goNext,
  index,
  activeIndex,
}) => {
  const container = useMemo(() => [styles.container, {width: width - 20, marginHorizontal: 10}], [width]);

  let translateX = useSharedValue(-(width - 20)); //20 => horizontal margin(10)

  const translateXStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  const indicatorStyle = useMemo(
    () => [styles.indicator, {width: width - 20}, translateXStyle],
    [translateX.value],
  );

  const handleFinished = (v: boolean) => {
    goNext();
  };

  useEffect(() => {
    if (isActiveBar) {
      if (index === activeIndex && duration) {
        if (translateX.value === 0) {
          translateX.value = -(width - 20);
        }
        translateX.value = withTiming(0, {duration}, (finish) => {
          if (finish) {
            runOnJS(handleFinished)(finish);
          }
        });
      } else {
        if (index < activeIndex) {
          translateX.value = 0;
        } else {
          translateX.value = -(width - 20);
        }
      }
    } else {
      translateX.value = -(width - 20);
    }
  }, [translateXStyle, index, activeIndex, duration, isActiveBar]);

  return (
    <View style={container}>
      <Animated.View style={indicatorStyle} />
    </View>
  );
};

export default Indicator;
