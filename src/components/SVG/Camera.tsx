import * as React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function Camera({width, height}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M16.457 3.349h0l-.002-.005c-.3-.594-.818-1.097-1.385-1.45-.568-.352-1.25-.594-1.92-.594h-2.29c-.674 0-1.358.241-1.927.594-.57.353-1.087.856-1.388 1.45h0l-.002.005-.717 1.444A.943.943 0 016 5.3c-2.572 0-4.614 2.17-4.448 4.735 0 0 0 0 0 0l.52 8.256v.002c.066 1.134.409 2.248 1.192 3.084.797.85 1.966 1.323 3.496 1.323h10.48c1.53 0 2.697-.474 3.493-1.324.782-.836 1.124-1.949 1.196-3.082h0l.52-8.258s0 0 0 0A4.453 4.453 0 0018 5.3a.943.943 0 01-.826-.507l-.717-1.444zM10.5 7.95h3c.008 0 .02.003.034.016.013.014.016.026.016.034 0 .008-.003.02-.016.034a.048.048 0 01-.034.016h-3c-.008 0-.02-.003-.034-.016-.013-.013-.016-.026-.016-.034 0-.008.003-.02.016-.034.014-.013.026-.016.034-.016zm1.5 9.47a2.682 2.682 0 01-2.68-2.68A2.676 2.676 0 0112 12.06a2.676 2.676 0 012.68 2.68A2.682 2.682 0 0112 17.42z"
        fill="url(#prefix__paint0_linear)"
        stroke="#F4F6FA"
        strokeWidth={1.4}
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={5.514}
          y1={2}
          x2={18.702}
          y2={22.12}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F1C35D" />
          <Stop offset={1} stopColor="#D0981B" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Camera;
