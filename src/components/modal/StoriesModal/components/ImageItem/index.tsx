import React from 'react';
import {Image, View} from '@components';
import styles from './styles';

type TProps = {
  url: string;
};

const ImageItem: React.FC<TProps> = ({url}) => {

  return (
    <View style={styles.container}>
      <Image source={{uri: url}} style={styles.image} />
    </View>
  );
};

export default ImageItem;
