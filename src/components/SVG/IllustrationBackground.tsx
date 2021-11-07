import * as React from 'react';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';
import Svg, {Circle, Defs, LinearGradient, Stop} from 'react-native-svg';

function IllustrationBackground({width, height}: any) {
  return (
    <Svg fill="none" width={width} height={height}>
      <Svg width={width} height={height} fill="none">
        <Circle
          cx={wd('50%')}
          cy={wd('45%')}
          r={width / 2.6}
          fill="url(#prefix__paint0_linear)"
        />
        <Defs>
          <LinearGradient
            id="prefix__paint0_linear"
            x1={140}
            y1={0}
            x2={140}
            y2={409.5}
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="#fff" stopOpacity={0.24} />
            <Stop offset={0.532} stopColor="#fff" stopOpacity={0} />
          </LinearGradient>
        </Defs>
      </Svg>

      <Circle
        cx={wd('50%')}
        cy={wd('45%')}
        r={width / 2.35}
        stroke="#F4F6FA"
        strokeOpacity={0.24}
        strokeWidth={2}
      />
      <Circle
        cx={wd('21%')}
        cy={wd('14%')}
        r={12}
        fill="url(#prefix__paint0_linear)"
      />
      <Circle cx={wd('27%')} cy={wd('81%')} r={6} fill="#FDD08B" />
      <Circle
        cx={wd('60%')}
        cy={wd('16')}
        r={6}
        fill="url(#prefix__paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={43.023}
          y1={0}
          x2={40.691}
          y2={55.496}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#3AC295" />
          <Stop offset={1} stopColor="#067C55" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={201.012}
          y1={40}
          x2={208.845}
          y2={52.248}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#3AC295" />
          <Stop offset={1} stopColor="#067C55" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default IllustrationBackground;
