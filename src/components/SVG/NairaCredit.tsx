import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function NairaCredit({width, height, color}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M16.766 9.145a7.624 7.624 0 01-7.62 7.62 7.624 7.624 0 01-7.622-7.62 7.624 7.624 0 017.621-7.62"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.955 2.286v3.049h3.048M16.765 1.524l-3.81 3.81"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.004 13.542v-2.964h-.696V9.69h.696v-.864h-.696v-.888h.696V4.974h1.884l.936 2.964h1.092V4.974h1.332v2.964h.684v.888h-.684v.864h.684v.888h-.684v2.964H9.352l-.96-2.964H7.336v2.964H6.004zm1.284-5.604h.336l-.348-1.152h-.048l.06 1.152zm.048 1.752h.792l-.264-.864h-.552l.024.864zm2.052 0h.552l-.024-.864h-.804l.276.864zm.564 1.98h.06l-.048-1.092H9.64l.312 1.092z"
        fill={color}
      />
    </Svg>
  );
}

export default NairaCredit;
