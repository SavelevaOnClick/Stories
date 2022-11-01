import React from 'react';
import FastImage from 'react-native-fast-image';
import {View, Image, ScrollView, Pressable, StoriesModal} from '@components';
import {useEffect, useState, useCallback, useTranslation, useRoute, useAppDispatch, useTheme, } from '@hooks';
import {HomeRouteProp} from '@types';
import {STORIES} from '../../mocks';
import styles from './styles';

const Home: React.FC = () => {
  const {t} = useTranslation();
  const {params} = useRoute<HomeRouteProp>();
  const dispatch = useAppDispatch();
  // const data = useAppSelector(selectData);
  const {colors} = useTheme();
  const [visible, setVisible] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<number>(0);

  const onPressStory = useCallback(
    (index: number) => () => {
      setActiveItem(index);
      setVisible(true);
    },
    [],
  );

  useEffect(() => {
    const test = STORIES.flatMap(item => item.stories.filter(it => it.image)).map(i => ({uri: i.image ? i.image : ''}));
    FastImage.preload(test);
  }, []);


  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
        {STORIES.map((item, index) => (
          <Pressable onPress={onPressStory(index)} key={item.id} style={styles.storyItemContainer}>
            <Image source={{uri: item.previewImage}} style={styles.storyImage} />
          </Pressable>
        ))}
      </ScrollView>
      <StoriesModal
        visible={visible}
        storiesData={STORIES}
        activeItemIndex={activeItem}
        setActiveItemIndex={setActiveItem}
        setVisible={setVisible}
      />
    </View>
  );
};

export default Home;
