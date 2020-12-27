import React from 'react';
import Animated from 'react-native-reanimated';
import {Path} from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const AnimatedBgStroke = ({d, strokeWidth, strokeColor}) => {
  const ref = React.useRef();
  const [length, setLength] = React.useState(0);

  return (
    <AnimatedPath
      ref={ref}
      onLayout={() => setLength(ref.current.getTotalLength())}
      d={d}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeDasharray={length}
    />
  );
};

export default AnimatedBgStroke;
