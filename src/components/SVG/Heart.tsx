import * as React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function Heart({width, height, color, fill}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M10.517 16.342c-.284.1-.75.1-1.034 0-2.416-.825-7.816-4.267-7.816-10.1 0-2.575 2.075-4.659 4.633-4.659 1.517 0 2.858.734 3.7 1.867a4.608 4.608 0 013.7-1.867c2.558 0 4.633 2.084 4.633 4.659 0 5.833-5.4 9.275-7.816 10.1z"
        stroke="url(#prefix__paint0_linear)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={4.461}
          y1={1.583}
          x2={13.632}
          y2={17.696}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} />
          <Stop offset={1} stopColor={fill} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Heart;
