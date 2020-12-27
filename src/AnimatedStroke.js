import React from 'react';
import Animated, {Easing, useAnimatedProps} from 'react-native-reanimated';
import {Path} from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const colors = ['#FF831F', '#FD460D', '#8ED7F0', '#3AEDC4'];

const AnimatedStroke = ({d, strokeWidth, animatedStrokeColor, progress}) => {
  const stroke = colors[Math.round(Math.random() * (colors.length - 1))];

  const ref = React.useRef();
  const [length, setLength] = React.useState(0);
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset:
      length - length * Easing.bezier(0.37, 0, 0.63, 1)(progress.value),
  }));

  const animatedBGProps = useAnimatedProps(() => ({
    strokeDashoffset:
      length - length * Easing.bezier(0.61, 1, 0.88, 1)(progress.value),
    fillOpacity: progress.value,
  }));

  return (
    <>
      <AnimatedPath
        animatedProps={animatedBGProps}
        d={d}
        stroke={animatedStrokeColor}
        strokeWidth={strokeWidth}
        fill="white"
        strokeDasharray={length}
      />
      <AnimatedPath
        ref={ref}
        onLayout={() => setLength(ref.current.getTotalLength())}
        animatedProps={animatedProps}
        d={d}
        stroke="#000"
        strokeWidth={strokeWidth}
        strokeDasharray={length}
      />
    </>
  );
};

export default AnimatedStroke;
