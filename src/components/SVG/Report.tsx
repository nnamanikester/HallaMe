import * as React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function Report({width, height, color, fill}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M7 2H6C3 2 2 3.79 2 6v15c0 .83.94 1.3 1.6.8l1.71-1.28c.4-.3.96-.26 1.32.1l1.66 1.67c.39.39 1.03.39 1.42 0l1.68-1.68c.35-.35.91-.39 1.3-.09l1.71 1.28c.66.49 1.6.02 1.6-.8V4c0-1.1.9-2 2-2H7zM5.97 14.01c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM12 13.76H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75zm0-4H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M18.01 2v1.5c.66 0 1.29.27 1.75.72.48.49.74 1.12.74 1.78v2.42c0 .74-.33 1.08-1.08 1.08H17.5V4.01c0-.28.23-.51.51-.51V2zm0 0C16.9 2 16 2.9 16 4.01V11h3.42C21 11 22 10 22 8.42V6c0-1.1-.45-2.1-1.17-2.83A4.044 4.044 0 0018.01 2c.01 0 0 0 0 0z"
        fill="url(#prefix__paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={4.682}
          y1={2}
          x2={19.206}
          y2={19.652}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} />
          <Stop offset={1} stopColor={fill} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={17.006}
          y1={2}
          x2={23.472}
          y2={8.74}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} />
          <Stop offset={1} stopColor={fill} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Report;
