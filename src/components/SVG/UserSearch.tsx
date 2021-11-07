import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function UserSearch({width, height, color}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M9 9a3.75 3.75 0 100-7.5A3.75 3.75 0 009 9zM2.558 16.5c0-2.902 2.887-5.25 6.442-5.25M13.65 16.05a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zM16.5 16.5l-.75-.75"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default UserSearch;
