import * as React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function Home({color, fill, width, height}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M24.301 9.345L16.66 3.232c-1.494-1.19-3.827-1.202-5.309-.012L3.71 9.345c-1.097.875-1.762 2.625-1.529 4.002l1.47 8.796c.339 1.972 2.17 3.524 4.165 3.524h12.367c1.972 0 3.838-1.587 4.177-3.535l1.47-8.797c.21-1.365-.455-3.115-1.529-3.99zM14.875 21a.881.881 0 01-.875.875.881.881 0 01-.875-.875v-3.5c0-.478.396-.875.875-.875.478 0 .875.397.875.875V21z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={6.113}
          y1={2.333}
          x2={21.236}
          y2={26.382}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={fill} />
          <Stop offset={1} stopColor={color} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Home;
