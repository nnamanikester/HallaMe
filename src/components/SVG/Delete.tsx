import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function Delete({width, height, color}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M17 3.75h-6.72c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.053 4.053 0 000 5.46l3.53 3.88a5.014 5.014 0 003.7 1.64H17c2.76 0 5-2.24 5-5v-6.5c0-2.76-2.24-5-5-5zm-.47 10.19c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.94-1.94L11.59 15c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06L12.47 12l-1.94-1.94a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1.94 1.94L15.47 9c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L14.59 12l1.94 1.94z"
        fill={color}
      />
    </Svg>
  );
}

export default Delete;
