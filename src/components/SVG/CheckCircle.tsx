import * as React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function CheckCircle({width, height}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        opacity={0.4}
        d="M70 128.333c32.216 0 58.333-26.116 58.333-58.333S102.216 11.667 70 11.667c-32.217 0-58.334 26.116-58.334 58.333S37.784 128.333 70 128.333z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M61.716 90.883a4.37 4.37 0 01-3.091-1.283L42.116 73.092c-1.691-1.692-1.691-4.492 0-6.184 1.692-1.691 4.492-1.691 6.184 0l13.416 13.417L91.7 50.342c1.691-1.692 4.491-1.692 6.183 0 1.692 1.691 1.692 4.491 0 6.183L64.808 89.6a4.37 4.37 0 01-3.092 1.283z"
        fill="url(#prefix__paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={31.224}
          y1={11.667}
          x2={107.386}
          y2={130.745}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F1C35D" />
          <Stop offset={1} stopColor="#D0981B" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={50.622}
          y1={49.073}
          x2={73.408}
          y2={98.754}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#3AC295" />
          <Stop offset={1} stopColor="#067C55" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default CheckCircle;
