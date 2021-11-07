import * as React from 'react';
import {Animated, ViewStyle} from 'react-native';

interface SlideXProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  style?: ViewStyle;
}

const SlideX: React.FC<SlideXProps> = ({
  children,
  from,
  to,
  duration,
  delay,
  style,
}) => {
  const [animate] = React.useState(new Animated.Value(from));

  React.useEffect(() => {
    (() => {
      Animated.timing(animate, {
        duration: duration || 1000,
        delay: delay || 0,
        toValue: to,
        useNativeDriver: false,
      }).start();
    })();
  }, []);

  const slideStyle = {
    left: animate,
    width: '100%',
  };

  return <Animated.View style={[slideStyle, style]}>{children}</Animated.View>;
};

export {SlideX};
