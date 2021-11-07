import * as React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function SvgComponent({width, height, color, fill}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm4.78 7.7l-5.67 5.67a.75.75 0 01-1.06 0l-2.83-2.83a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0 .29.29.29.76 0 1.06z"
        fill="url(#prefix__paint0_linear_230:4755)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_230:4755"
          x1={5.353}
          y1={2}
          x2={18.409}
          y2={22.413}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} />
          <Stop offset={1} stopColor={fill} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
