import * as React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function Biometrics({width, height, color, fill}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M22 9.75c-.41 0-.75-.34-.75-.75V7c0-2.58-1.67-4.25-4.25-4.25h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c3.44 0 5.75 2.31 5.75 5.75v2c0 .41-.34.75-.75.75z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M2 9.75c-.41 0-.75-.34-.75-.75V7c0-3.44 2.31-5.75 5.75-5.75h2c.41 0 .75.34.75.75s-.34.75-.75.75H7C4.42 2.75 2.75 4.42 2.75 7v2c0 .41-.34.75-.75.75z"
        fill="url(#prefix__paint1_linear)"
      />
      <Path
        d="M17 22.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c2.58 0 4.25-1.67 4.25-4.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 3.44-2.31 5.75-5.75 5.75z"
        fill="url(#prefix__paint2_linear)"
      />
      <Path
        d="M9 22.75H7c-3.44 0-5.75-2.31-5.75-5.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 2.58 1.67 4.25 4.25 4.25h2c.41 0 .75.34.75.75s-.34.75-.75.75z"
        fill="url(#prefix__paint3_linear)"
      />
      <Path
        d="M12 9.87c-.49 0-.9.4-.9.9v2.47c0 .5.4.9.9.9s.9-.4.9-.9v-2.47c0-.5-.41-.9-.9-.9z"
        fill="url(#prefix__paint4_linear)"
      />
      <Path
        d="M15.53 7.4c-.34-.34-.73-.63-1.15-.87-.14-.07-.29-.14-.44-.21-.15-.06-.3-.12-.46-.16-.16-.05-.32-.09-.48-.13-.01 0-.03 0-.04-.01-.31-.06-.63-.09-.95-.09h-.02c-.32 0-.63.03-.94.09-.04.01-.08.01-.11.03-.14.03-.28.06-.42.11-.17.04-.34.11-.51.18-.13.06-.26.13-.38.19-.15.08-.28.17-.42.26-.26.18-.51.38-.74.61-.11.11-.22.23-.32.35-.1.13-.2.25-.29.39-.09.13-.17.27-.25.41-.38.71-.6 1.52-.6 2.38v2.14c0 1.73.88 3.25 2.2 4.14.12.09.25.16.38.24l.55.26c.28.11.57.2.86.26.32.06.65.1.99.1h.02c.34 0 .67-.04.99-.1.3-.06.59-.15.87-.26a5.003 5.003 0 003.12-4.64v-2.14c0-1.38-.56-2.63-1.46-3.53zm-1.13 5.84c0 1.32-1.08 2.4-2.4 2.4-1.32 0-2.4-1.08-2.4-2.4v-2.47c0-1.32 1.08-2.4 2.4-2.4 1.32 0 2.4 1.08 2.4 2.4v2.47z"
        fill="url(#prefix__paint5_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={15.675}
          y1={1.25}
          x2={21.224}
          y2={9.926}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} />
          <Stop offset={1} stopColor={fill} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={2.675}
          y1={1.25}
          x2={8.224}
          y2={9.926}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} />
          <Stop offset={1} stopColor={fill} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={15.675}
          y1={14.25}
          x2={21.224}
          y2={22.926}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} />
          <Stop offset={1} stopColor={fill} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint3_linear"
          x1={2.675}
          y1={14.25}
          x2={8.224}
          y2={22.926}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} />
          <Stop offset={1} stopColor={fill} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint4_linear"
          x1={11.401}
          y1={9.87}
          x2={14.223}
          y2={11.73}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#3AC295" />
          <Stop offset={1} stopColor={fill} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint5_linear"
          x1={8.683}
          y1={5.93}
          x2={17.145}
          y2={16.806}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#3AC295" />
          <Stop offset={1} stopColor={fill} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Biometrics;
