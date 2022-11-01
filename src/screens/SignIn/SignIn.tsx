import React from 'react';
import {View, Text, Image, TouchableOpacity, Pressable} from '@components';
import {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useTranslation,
  useRoute,
  useAppDispatch,
  useAppSelector,
  useTheme,
} from '@hooks';
import {setToken} from '@reducers/global';
import {navigate} from '@services';
import {SignInRouteProp} from '@types';
import styles from './styles';

const SignIn: React.FC = () => {
  const {t} = useTranslation();
  const {params} = useRoute<SignInRouteProp>();
  const dispatch = useAppDispatch();
  // const data = useAppSelector(selectData);
  const {colors} = useTheme();

  const onPressLogin = useCallback(() => dispatch(setToken('token')), []);

  return (
    <View style={styles.container}>
      <Pressable onPress={onPressLogin}>
        <Text>SignInScreen</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
