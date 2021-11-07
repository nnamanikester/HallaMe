import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function ChevronRight({width, height, color}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M7.425 16.6l5.433-5.433a1.655 1.655 0 000-2.334L7.425 3.4"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ChevronRight;
