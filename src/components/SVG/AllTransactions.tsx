import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function AllTransactions({width, height, color}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M17.084 9.417v-3.55c0-3.359-.784-4.2-3.934-4.2h-6.3c-3.15 0-3.933.841-3.933 4.2v9.383c0 2.217 1.217 2.742 2.692 1.158l.008-.008c.683-.725 1.725-.667 2.317.125l.841 1.125"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.167 17.833a2.667 2.667 0 100-5.333 2.667 2.667 0 000 5.333zM18.333 18.333L17.5 17.5M6.667 5.833h6.667M7.5 9.167h5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default AllTransactions;
