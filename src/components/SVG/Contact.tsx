import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

function Contact(props: SvgProps) {
  return (
    <Svg width={props.width} height={20} fill="none">
      <Path
        d="M15.117 18.017c-.734.216-1.6.316-2.617.316h-5c-1.017 0-1.883-.1-2.617-.316.184-2.167 2.409-3.875 5.117-3.875s4.933 1.708 5.117 3.875z"
        stroke="url(#prefix__paint0_linear)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5 1.667h-5c-4.167 0-5.833 1.666-5.833 5.833v5c0 3.15.95 4.875 3.216 5.517.184-2.167 2.409-3.875 5.117-3.875s4.933 1.708 5.117 3.875c2.266-.642 3.216-2.367 3.216-5.517v-5c0-4.167-1.666-5.833-5.833-5.833zM10 11.808a2.987 2.987 0 01-2.983-2.991A2.98 2.98 0 0110 5.833a2.98 2.98 0 012.983 2.984A2.987 2.987 0 0110 11.808z"
        stroke="url(#prefix__paint1_linear)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.983 8.817A2.987 2.987 0 0110 11.808a2.987 2.987 0 01-2.983-2.991A2.98 2.98 0 0110 5.833a2.98 2.98 0 012.983 2.984z"
        stroke="url(#prefix__paint2_linear)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={6.599}
          y1={14.142}
          x2={8.077}
          y2={19.783}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={props.color} />
          <Stop offset={1} stopColor="#D0981B" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={4.461}
          y1={1.667}
          x2={15.047}
          y2={18.539}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={props.color} />
          <Stop offset={1} stopColor="#D0981B" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={8.017}
          y1={5.833}
          x2={11.92}
          y2={11.927}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={props.color} />
          <Stop offset={1} stopColor="#D0981B" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Contact;
