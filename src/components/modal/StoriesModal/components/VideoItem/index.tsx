import React from 'react';
import {ActivityIndicator, Video, View} from '@components';
import {useState, useRef, useCallback, useMemo} from '@hooks';
import {OnLoadData} from '@types';
import styles from './styles';

type TProps = {
  url: string;
  setDuration: (duration: number) => void;
};

const VideoItem: React.FC<TProps> = ({url, setDuration}) => {
  const [load, setLoad] = useState<boolean>(true);
  const refPlayer = useRef<Video | null>();

  const onLoad = useCallback((data: OnLoadData) => {
    setLoad(false);
    setDuration(data.duration * 1000);
    refPlayer?.current?.seek(0);
  }, []);

  const ref = useCallback((ref: Video) => {
    refPlayer.current = ref;
  }, []);

  const Loader = useCallback(
    () => (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    ),
    [],
  );

  const bufferConfig = useMemo(
    () => ({
      minBufferMs: 15000,
      maxBufferMs: 50000,
      bufferForPlaybackMs: 2500,
      bufferForPlaybackAfterRebufferMs: 5000,
    }),
    [],
  );

  return (
    <View style={styles.flexContainer}>
      {load ? <Loader /> : null}
      <Video
        source={{uri: url, type: 'mp4'}}
        ref={ref}
        resizeMode="cover"
        controls={false}
        onLoad={onLoad}
        bufferConfig={bufferConfig}
        style={styles.video}
        // onError={onError => console.log(onError)} //TODO:
        hideShutterView
      />
    </View>
  );
};

export default VideoItem;
