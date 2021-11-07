import * as React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function ShadedLock({width, height, color, fill}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M12 17.35a1.63 1.63 0 100-3.26 1.63 1.63 0 000 3.26z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M18.28 9.53V8.28C18.28 5.58 17.63 2 12 2S5.72 5.58 5.72 8.28v1.25C2.92 9.88 2 11.3 2 14.79v1.86C2 20.75 3.25 22 7.35 22h9.3c4.1 0 5.35-1.25 5.35-5.35v-1.86c0-3.49-.92-4.91-3.72-5.26zM12 18.74c-1.67 0-3.02-1.36-3.02-3.02 0-1.67 1.36-3.02 3.02-3.02a3.03 3.03 0 013.02 3.02c0 1.67-1.35 3.02-3.02 3.02zm-4.65-9.3h-.23V8.28c0-2.93.83-4.88 4.88-4.88s4.88 1.95 4.88 4.88v1.17H7.35v-.01z"
        fill="url(#prefix__paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={10.916}
          y1={14.09}
          x2={13.044}
          y2={17.417}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} />
          <Stop offset={1} stopColor={fill} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
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

export default ShadedLock;
