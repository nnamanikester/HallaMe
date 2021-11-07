import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function Search({width, height, color}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M9.584 17.5a7.917 7.917 0 100-15.833 7.917 7.917 0 000 15.833zM18.334 18.333l-1.667-1.666"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Search;
