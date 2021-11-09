import * as React from 'react';
import {Animated, ViewProps} from 'react-native';
import * as UI from '@/components/common';

interface PopProps extends ViewProps {
  from: number;
  to: number;
  delay?: number;
  speed?: number;
  style?: any;
  onClick?: (() => void) | undefined;
  onLongPress?: () => void;
}

interface PopState {
  animate: Animated.Value;
}

class Pop extends React.Component<PopProps, PopState> {
  constructor(props: PopProps) {
    super(props);
    this.state = {
      animate: new Animated.Value(props.from),
    };
  }

  pop = (): void => {
    const {onClick, to, delay, from, speed} = this.props;
    const {animate} = this.state;
    Animated.spring(animate, {
      toValue: to,
      delay: delay || 0,
      speed: speed || 1000,
      useNativeDriver: true,
    }).start(() => {
      animate.setValue(from);
    });

    onClick ? onClick() : null;
  };

  onPressIn = (): void => {
    const {to, delay, speed} = this.props;
    const {animate} = this.state;
    Animated.spring(animate, {
      toValue: to,
      delay: delay || 0,
      speed: speed || 500,
      useNativeDriver: true,
    }).start();
  };

  onPressOut = (): void => {
    const {from} = this.props;
    const {animate} = this.state;

    animate.setValue(from);
  };
  render() {
    const {children, style, onClick, onLongPress} = this.props;
    const {animate} = this.state;

    const animStyle = {
      transform: [
        {
          scale: animate,
        },
      ],
      ...style,
    };

    return (
      <Animated.View {...this.props} style={animStyle}>
        <UI.Clickable
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
          onLongPress={onLongPress}
          delayLongPress={1500}
          onClick={onClick}>
          {children}
        </UI.Clickable>
      </Animated.View>
    );
  }
}

export {Pop};
