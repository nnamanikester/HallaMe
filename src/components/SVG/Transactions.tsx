import * as React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function Transactions({color, fill, width, height}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M18.888 2.333H9.111c-4.246 0-6.778 2.532-6.778 6.779v9.765c0 4.258 2.532 6.79 6.778 6.79h9.765c4.247 0 6.779-2.532 6.779-6.779V9.112c.011-4.247-2.52-6.779-6.767-6.779zm1.75 14.059a.906.906 0 01-.187.28l-3.441 3.441a.865.865 0 01-.619.257.865.865 0 01-.618-.257.88.88 0 010-1.236l1.948-1.949H8.166a.881.881 0 01-.875-.875c0-.478.397-.875.875-.875h11.667a.88.88 0 01.338.07c.21.094.385.257.479.479a.877.877 0 01-.012.665zm-.805-3.57H8.166a.88.88 0 01-.338-.07.913.913 0 01-.478-.479.825.825 0 010-.665c.058-.105.116-.198.198-.28l3.442-3.441a.88.88 0 011.236 0 .88.88 0 010 1.236l-1.948 1.949h9.555c.478 0 .875.396.875.875a.881.881 0 01-.875.875z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={6.243}
          y1={2.333}
          x2={21.478}
          y2={26.142}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={fill} />
          <Stop offset={1} stopColor={color} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Transactions;
