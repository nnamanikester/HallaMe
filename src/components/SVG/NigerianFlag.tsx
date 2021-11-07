import * as React from 'react';
import Svg, {
  G,
  Mask,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

function NigerianFlag() {
  return (
    <Svg width={24} height={20} fill="none">
      <G filter="url(#prefix__filter0_d)">
        <G clipPath="url(#prefix__clip0)">
          <Mask
            id="prefix__a"
            style={{
              maskType: 'alpha',
            }}
            maskUnits="userSpaceOnUse"
            x={2}
            y={0}
            width={20}
            height={15}>
            <Path fill="#fff" d="M2 0h20v15H2z" />
          </Mask>
          <G mask="url(#prefix__a)" fillRule="evenodd" clipRule="evenodd">
            <Path d="M2 0h20v15H2V0z" fill="#F7FCFF" />
            <Path d="M16 0h6v15h-6V0zM2 0h6v15H2V0z" fill="#093" />
          </G>
          <Path
            fill="url(#prefix__paint0_linear)"
            style={{
              mixBlendMode: 'overlay',
            }}
            d="M3 1h18v13.5H3z"
          />
        </G>
        <Path
          d="M4.5 2h15V0h-15v2zm15.5.5V13h2V2.5h-2zm-.5 11h-15v2h15v-2zM4 13V2.5H2V13h2zm.5.5A.5.5 0 014 13H2a2.5 2.5 0 002.5 2.5v-2zM20 13a.5.5 0 01-.5.5v2A2.5 2.5 0 0022 13h-2zm-.5-11a.5.5 0 01.5.5h2A2.5 2.5 0 0019.5 0v2zm-15-2A2.5 2.5 0 002 2.5h2a.5.5 0 01.5-.5V0z"
          fill="#000"
          fillOpacity={0.1}
          style={{
            mixBlendMode: 'multiply',
          }}
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={12}
          y1={1}
          x2={12}
          y2={14.5}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" stopOpacity={0.7} />
          <Stop offset={1} stopOpacity={0.3} />
        </LinearGradient>
        <ClipPath id="prefix__clip0">
          <Path
            d="M3 2.5A1.5 1.5 0 014.5 1h15A1.5 1.5 0 0121 2.5V13a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 13V2.5z"
            fill="#fff"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default NigerianFlag;
