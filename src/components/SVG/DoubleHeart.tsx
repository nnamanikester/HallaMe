import * as React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function DoubleHeart({width, height, color, fill}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M18.8 9.91c-1.13 0-2.14.55-2.77 1.39a3.466 3.466 0 00-2.77-1.39c-1.91 0-3.46 1.56-3.46 3.48 0 .74.12 1.43.32 2.06.98 3.11 4.02 4.98 5.52 5.49.21.07.56.07.77 0 1.5-.51 4.54-2.37 5.52-5.49.21-.64.32-1.32.32-2.06a3.457 3.457 0 00-3.45-3.48z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M20.75 8.34c0 .23-.23.38-.45.32a4.81 4.81 0 00-3.95.74c-.22.16-.52.16-.73 0a4.65 4.65 0 00-2.76-.9c-2.58 0-4.68 2.11-4.68 4.71 0 2.82 1.35 4.93 2.71 6.34.07.07.01.19-.08.15C8.08 18.77 2 14.91 2 8.34 2 5.44 4.33 3.1 7.21 3.1c1.71 0 3.22.82 4.17 2.09a5.218 5.218 0 014.17-2.09c2.87 0 5.2 2.34 5.2 5.24z"
        fill="url(#prefix__paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={11.888}
          y1={9.91}
          x2={18.741}
          y2={21.947}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} />
          <Stop offset={1} stopColor={fill} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={5.143}
          y1={3.1}
          x2={15.387}
          y2={21.182}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} />
          <Stop offset={1} stopColor={fill} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default DoubleHeart;
