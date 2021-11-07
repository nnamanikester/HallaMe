import * as React from 'react';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';
import Svg, {Mask, Rect, G} from 'react-native-svg';

function MaskedBg() {
  return (
    <Svg width={wd('100%')} height={330} fill="none">
      <Mask id="prefix__a" x={0} y={0} width={wd('100%')} height={330}>
        <Rect width={wd('100%')} height={330} rx={20} fill="#F44771" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Rect
          x={1.277}
          y={-0.67}
          width={263.735}
          height={138.768}
          rx={49}
          transform="matrix(.31686 -.94847 .96035 .2788 165.516 144.636)"
          stroke="#fff"
          strokeOpacity={0.2}
          strokeWidth={2}
        />
        <Rect
          opacity={0.2}
          width={273.749}
          height={136.875}
          rx={50}
          transform="scale(1.03445 .96432) rotate(45 73.271 340.737)"
          fill="#fff"
          fillOpacity={0.18}
        />
        <Rect
          x={237.627}
          y={50.254}
          width={283.18}
          height={131.991}
          rx={50}
          fill="#fff"
          fillOpacity={0.1}
        />
      </G>
    </Svg>
  );
}

export default MaskedBg;
