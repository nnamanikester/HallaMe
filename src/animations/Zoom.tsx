import * as React from 'react';
import {Animated, ViewStyle} from 'react-native';

interface ZoomProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  style?: ViewStyle;
}

const Zoom: React.FC<ZoomProps> = ({
  children,
  duration,
  from,
  to,
  delay,
  style,
}) => {
  const [animate] = React.useState(new Animated.Value(from));

  const animStyle = {
    width: '100%',
    transform: [
      {
        scale: animate,
      },
    ],
    ...style,
  };

  React.useEffect(() => {
    Animated.timing(animate, {
      toValue: to,
      delay: delay || 0,
      duration: duration || 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return <Animated.View style={animStyle}>{children}</Animated.View>;
};

export {Zoom};
