import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Svg } from 'react-native-svg';
import {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import AnimatedStroke from './AnimatedStroke';
import PlaceholderStroke from './PlaceholderStroke';

const AnimatedLogo = ({
  margin,
  paths,
  vWidth = vWidth + margin,
  vHeight = vHeight + margin,
  duration,
  strokeWidth,
  strokeColor,
  animatedStrokeColor,
  isRepeat = false,
}) => {
  const width = Dimensions.get('window').width - 64;
  const height = (width * vHeight) / vWidth;

  const progress = useSharedValue(0);

  React.useEffect(() => {
    progress.value = isRepeat
      ? withRepeat(
          withTiming(1, {
            duration,
            easing: Easing.inOut(Easing.ease),
          }),
          -1,
          true
        )
      : withTiming(1, {
          duration,
          easing: Easing.inOut(Easing.ease),
        });
  }, [progress]);

  return (
    <>
      <View style={styles.layer}>
        <Svg
          width={width}
          height={height}
          viewBox={`${-margin / 2} ${-margin / 2} ${vWidth + margin / 2} ${
            vHeight + margin / 2
          }`}
        >
          {paths.map((d, key) => (
            <AnimatedStroke
              d={d}
              strokeWidth={strokeWidth}
              animatedStrokeColor={animatedStrokeColor}
              progress={progress}
              key={key}
            />
          ))}
        </Svg>
      </View>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={[styles.layer, { opacity: 0.2 }]}>
        <Svg
          width={width}
          height={height}
          viewBox={`${-margin / 2} ${-margin / 2} ${vWidth + margin / 2} ${
            vHeight + margin / 2
          }`}
        >
          {paths.map((d, key) => (
            <PlaceholderStroke
              key={key}
              d={d}
              strokeWidth={strokeWidth}
              strokeColor={strokeColor}
            />
          ))}
        </Svg>
      </View>
    </>
  );
};

export default AnimatedLogo;
const styles = StyleSheet.create({
  layer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
