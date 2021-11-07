import * as React from 'react';
import Svg, {G, Circle, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function DoubleCircle() {
  return (
    <Svg width={92} height={92} fill="none">
      <G filter="url(#prefix__filter0_d)">
        <Circle cx={46} cy={26} r={16} fill="#fff" />
      </G>
      <Circle cx={66} cy={26} r={16} fill="#fff" fillOpacity={0.8} />
      <Defs />
    </Svg>
  );
}

export default DoubleCircle;
