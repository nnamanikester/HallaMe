import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

function Mail(props: SvgProps) {
  return (
    <Svg width={props.width} height={20} fill="none">
      <Path
        d="M14.167 17.083H5.833c-2.5 0-4.166-1.25-4.166-4.166V7.083c0-2.916 1.666-4.166 4.166-4.166h8.334c2.5 0 4.166 1.25 4.166 4.166v5.834c0 2.916-1.666 4.166-4.166 4.166z"
        stroke="url(#prefix__paint0_linear)"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.167 7.5l-2.609 2.083c-.858.684-2.266.684-3.125 0L5.833 7.5"
        stroke="url(#prefix__paint1_linear)"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={4.461}
          y1={2.917}
          x2={13.01}
          y2={18.643}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F1C35D" />
          <Stop offset={1} stopColor="#D0981B" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={7.23}
          y1={7.5}
          x2={7.946}
          y2={11.091}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F1C35D" />
          <Stop offset={1} stopColor="#D0981B" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Mail;
