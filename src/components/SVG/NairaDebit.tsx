import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function Cashout2({width, height, color}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M16.766 9.145a7.624 7.624 0 01-7.62 7.62 7.624 7.624 0 01-7.622-7.62 7.624 7.624 0 017.621-7.62M16.766 4.572V1.524h-3.048M12.955 5.335l3.81-3.81M12.955 5.335l3.81-3.81"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.315 13.097v-2.964H5.62v-.888h.696V8.38H5.62v-.888h.696V4.529H8.2l.936 2.964h1.092V4.529h1.332v2.964h.684v.888h-.684v.864h.684v.888h-.684v2.964H9.663l-.96-2.964H7.647v2.964H6.315zM7.6 7.493h.336L7.587 6.34H7.54l.06 1.152zm.048 1.752h.792l-.264-.864h-.552l.024.864zm2.052 0h.552l-.024-.864h-.804l.276.864zm.564 1.98h.06l-.048-1.092h-.324l.312 1.092z"
        fill={color}
      />
    </Svg>
  );
}

export default Cashout2;
