import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface GradientHelperProps {
  style?: any;
  color1: any;
  color2: any;
  start?: {x: number; y: number};
  end?: {x: number; y: number};
}

interface GradientHelperState {}

class GradientHelper extends React.Component<
  GradientHelperProps,
  GradientHelperState
> {
  constructor(props: GradientHelperProps) {
    super(props);
  }
  render() {
    const {
      style,
      color1,
      color2,
      start = {x: 0, y: 0},
      end = {x: 0, y: 1},
      children,
    } = this.props;
    return (
      <LinearGradient
        colors={[color1, color2]}
        start={start}
        end={end}
        style={style}>
        {children}
      </LinearGradient>
    );
  }
}

export default GradientHelper;
