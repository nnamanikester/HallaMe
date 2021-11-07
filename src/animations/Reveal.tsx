import React from 'react';
import {Animated} from 'react-native';

interface RevealProps {
  from: number;
  to: number;
  duration: number;
}

interface RevealState {
  animate: Animated.Value;
}

class Reveal extends React.Component<RevealProps, RevealState> {
  constructor(props: RevealProps) {
    super(props);
    const {from} = props;
    this.state = {
      animate: new Animated.Value(from || 0),
    };
  }

  componentDidMount() {
    this.reveal();
  }

  componentWillUnmount() {
    this.hide();
  }

  reveal = (): void => {
    const {duration, to} = this.props;
    const {animate} = this.state;

    Animated.timing(animate, {
      duration,
      toValue: to || 1,
      useNativeDriver: false,
    }).start();
  };

  hide = (): void => {
    const {duration} = this.props;
    const {animate} = this.state;

    Animated.timing(animate, {
      duration,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  render() {
    const {children} = this.props;
    const {animate} = this.state;

    const revealStyle = {
      opacity: animate,
      width: '100%',
    };

    return <Animated.View style={revealStyle}>{children}</Animated.View>;
  }
}

export {Reveal};
