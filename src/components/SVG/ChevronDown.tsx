import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function ChevronDown({width, height, color}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M5.537 8.95l8.849 6.52c1.045.77 2.755.77 3.8 0l8.848-6.52"
        stroke={color}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ChevronDown;
