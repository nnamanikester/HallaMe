import * as React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function Card({width, height, color, fill}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M22 7.55c0 .66-.54 1.2-1.2 1.2H3.2c-.66 0-1.2-.54-1.2-1.2v-.01C2 5.25 3.85 3.4 6.14 3.4h11.71C20.14 3.4 22 5.26 22 7.55z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M2 11.45v5.01c0 2.29 1.85 4.14 4.14 4.14h11.71c2.29 0 4.15-1.86 4.15-4.15v-5c0-.66-.54-1.2-1.2-1.2H3.2c-.66 0-1.2.54-1.2 1.2zm6 5.8H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75zm6.5 0h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75z"
        fill="url(#prefix__paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={5.353}
          y1={3.4}
          x2={6.632}
          y2={10.876}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} />
          <Stop offset={1} stopColor={fill} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={5.353}
          y1={10.25}
          x2={9.793}
          y2={23.666}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} />
          <Stop offset={1} stopColor={fill} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Card;
