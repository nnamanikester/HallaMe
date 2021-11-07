import * as React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function Timer({color, fill, width, height}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M17.292 11.042A7.294 7.294 0 0110 18.333a7.294 7.294 0 01-7.292-7.291A7.294 7.294 0 0110 3.75a7.294 7.294 0 017.292 7.292z"
        stroke="url(#prefix__paint0_linear)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 6.667v4.166"
        stroke="url(#prefix__paint1_linear)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 1.667h5"
        stroke="url(#prefix__paint2_linear)"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={5.153}
          y1={3.75}
          x2={14.674}
          y2={18.635}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={fill} />
          <Stop offset={1} stopColor={color} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={10.168}
          y1={6.667}
          x2={12.139}
          y2={7.406}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={fill} />
          <Stop offset={1} stopColor={color} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={8.338}
          y1={1.667}
          x2={8.519}
          y2={3.082}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={fill} />
          <Stop offset={1} stopColor={color} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Timer;
