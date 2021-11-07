import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function Share({width, height, color}: SvgProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M14.133 5.142a7.191 7.191 0 013.05 5.125M2.908 10.308a7.168 7.168 0 013-5.125M6.824 17.45a7.104 7.104 0 003.225.767c1.117 0 2.167-.25 3.109-.709M10.05 6.417a2.317 2.317 0 10-.001-4.634 2.317 2.317 0 000 4.634zM4.026 16.6a2.317 2.317 0 100-4.633 2.317 2.317 0 000 4.633zM15.975 16.6a2.317 2.317 0 100-4.633 2.317 2.317 0 000 4.633z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Share;
