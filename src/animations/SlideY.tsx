import React from 'react';
import {Animated} from 'react-native';

interface SlideYProps {
  from: number;
  to: number;
  duration: number;
  delay?: number;
}

interface SlideYState {
  animate: Animated.Value;
}

class SlideY extends React.Component<SlideYProps, SlideYState> {
  constructor(props: SlideYProps) {
    super(props);
    this.state = {animate: new Animated.Value(props.from)};
  }

  componentDidMount() {
    const {to, duration, delay} = this.props;

    Animated.timing(this.state.animate, {
      duration,
      delay: delay || 0,
      toValue: to,
      useNativeDriver: false,
    }).start();
  }

  componentDidUpdate() {
    const {to, duration, delay} = this.props;

    Animated.timing(this.state.animate, {
      duration,
      delay: delay || 0,
      toValue: to,
      useNativeDriver: false,
    }).start();
  }

  render() {
    const {children} = this.props;
    const {animate} = this.state;

    const slideStyle = {
      bottom: animate,
      width: '100%',
    };

    return <Animated.View style={slideStyle}>{children}</Animated.View>;
  }
}

export {SlideY};
