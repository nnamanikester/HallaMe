import * as React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function Copy({width, height, color, fill}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M13.333 10.75v3.5c0 2.917-1.167 4.083-4.083 4.083h-3.5c-2.917 0-4.083-1.166-4.083-4.083v-3.5c0-2.917 1.166-4.083 4.083-4.083h3.5c2.916 0 4.083 1.166 4.083 4.083z"
        stroke="url(#prefix__paint0_linear)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.333 5.75v3.5c0 2.917-1.166 4.083-4.083 4.083h-.917V10.75c0-2.917-1.167-4.083-4.083-4.083H6.667V5.75c0-2.917 1.166-4.083 4.083-4.083h3.5c2.916 0 4.083 1.166 4.083 4.083z"
        stroke="url(#prefix__paint1_linear)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={3.622}
          y1={6.667}
          x2={11.239}
          y2={18.575}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={fill} />
          <Stop offset={1} stopColor={color} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={8.622}
          y1={1.667}
          x2={16.238}
          y2={13.575}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={fill} />
          <Stop offset={1} stopColor={color} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Copy;
