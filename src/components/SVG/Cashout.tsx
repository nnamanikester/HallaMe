import * as React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function Cashout({color, width, height, fill}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M23.963 8.3c-.538-2.713-2.55-3.9-5.35-3.9H7.638c-3.3 0-5.5 1.65-5.5 5.5v6.437c0 2.776 1.137 4.4 3.012 5.1.275.1.575.188.888.238a7.31 7.31 0 001.6.162h10.987c3.3 0 5.5-1.65 5.5-5.5V9.9c0-.588-.05-1.113-.162-1.6zM6.913 15a.944.944 0 01-.938.938.944.944 0 01-.937-.938v-3.75c0-.512.425-.938.937-.938.513 0 .938.426.938.938V15zm6.212 1.425a3.297 3.297 0 01-3.3-3.3c0-1.825 1.475-3.3 3.3-3.3 1.825 0 3.3 1.475 3.3 3.3 0 1.825-1.475 3.3-3.3 3.3zM21.2 15a.944.944 0 01-.937.938.944.944 0 01-.938-.938v-3.75c0-.512.425-.938.938-.938.512 0 .937.426.937.938V15z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M27.875 13.65v6.437c0 3.85-2.2 5.513-5.513 5.513H11.387c-.937 0-1.775-.138-2.5-.413a4.215 4.215 0 01-1.512-.925c-.225-.212-.05-.55.262-.55h10.975c4.625 0 7.375-2.75 7.375-7.362V9.9c0-.3.338-.487.55-.262.85.9 1.338 2.212 1.338 4.012z"
        fill="url(#prefix__paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={5.824}
          y1={4.4}
          x2={15.941}
          y2={24.347}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} />
          <Stop offset={1} stopColor={fill} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={10.727}
          y1={9.538}
          x2={19.952}
          y2={28.038}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} />
          <Stop offset={1} stopColor={fill} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Cashout;
