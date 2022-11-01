import React from 'react';
import {View, Text, Pressable} from '@components';
import {useTranslation, useTheme, useCallback, useAppDispatch} from '@hooks';
import {setFirstOpenApp} from '@reducers/global';
import styles from './styles';

const Onboarding: React.FC = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();

  const onPressHandler = useCallback(() => dispatch(setFirstOpenApp(false)), []);
  return (
    <View style={styles.container}>
      <Pressable onPress={onPressHandler}>
        <Text>Welcome Screen</Text>
      </Pressable>
    </View>
  );
};

export default Onboarding;
