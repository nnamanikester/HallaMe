import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

function Lock(props: SvgProps) {
  return (
    <Svg width={props.width} height={20} fill="none">
      <Path
        d="M5 8.333V6.667c0-2.759.833-5 5-5s5 2.241 5 5v1.666"
        stroke="url(#prefix__paint0_linear)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 15.417a2.083 2.083 0 100-4.167 2.083 2.083 0 000 4.167z"
        stroke="url(#prefix__paint1_linear)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.167 18.333H5.833c-3.333 0-4.166-.833-4.166-4.166V12.5c0-3.333.833-4.167 4.166-4.167h8.334c3.333 0 4.166.834 4.166 4.167v1.667c0 3.333-.833 4.166-4.166 4.166z"
        stroke="url(#prefix__paint2_linear)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={6.676}
          y1={1.667}
          x2={10.136}
          y2={9.78}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F1C35D" />
          <Stop offset={1} stopColor="#D0981B" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={8.615}
          y1={11.25}
          x2={11.335}
          y2={15.503}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F1C35D" />
          <Stop offset={1} stopColor="#D0981B" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={4.461}
          y1={8.333}
          x2={9.271}
          y2={20.869}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F1C35D" />
          <Stop offset={1} stopColor="#D0981B" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Lock;
