/* @flow */
import * as React from 'react';
import {View, Animated, StatusBar, StyleSheet} from 'react-native';
import styles, {
  _staticBackground,
  _dynamicLogoStyle,
  _dynamicCustomComponentStyle,
  _dynamicImageBackground,
} from './styles';

export interface AnimatedSplashProps {
  isLoaded: boolean;
  preload?: boolean;
  logoWidth?: number;
  logoHeight?: number;
  backgroundColor: string;
  disableBackgroundImage?: boolean;
  logoImage: number | object;
  translucent?: boolean;
  customComponent?: React.ReactElement;
  disableAppScale?: boolean;
  duration?: number;
  delay?: number;
  showStatusBar?: boolean;
}

class AnimatedSplash extends React.Component<AnimatedSplashProps> {
  static defaultProps = {
    isLoaded: false,
  };

  state = {
    animationDone: false,
    loadingProgress: new Animated.Value(0),
    showStatusBar: true,
  };

  componentDidUpdate(prevProps: AnimatedSplashProps) {
    const {isLoaded, duration, delay} = this.props;
    const {loadingProgress} = this.state;

    if (isLoaded && !prevProps.isLoaded) {
      Animated.timing(loadingProgress, {
        toValue: 100,
        duration: duration || 1000,
        delay: delay || 0,
        useNativeDriver: true,
      }).start(() => {
        this.setState({
          animationDone: true,
        });
      });
    }
  }

  renderChildren() {
    const {children, preload, isLoaded} = this.props;

    if (preload || preload == null) {
      return children;
    } else {
      if (isLoaded) {
        return children;
      }
    }

    return null;
  }

  render() {
    const {loadingProgress, animationDone} = this.state;
    const {
      logoImage,
      logoWidth,
      logoHeight,
      backgroundColor,
      translucent,
      customComponent,
      disableAppScale,
      showStatusBar,
    } = this.props;

    const opacityClearToVisible = {
      opacity: loadingProgress.interpolate({
        inputRange: [0, 15, 30],
        outputRange: [0, 0, 1],
        extrapolate: 'clamp',
      }),
    };

    const imageScale = {
      transform: [
        {
          scale: loadingProgress.interpolate({
            inputRange: [0, 10, 100],
            outputRange: [1, 1, 65],
          }),
        },
      ],
    };

    const logoScale = {
      transform: [
        {
          scale: loadingProgress.interpolate({
            inputRange: [0, 10, 100],
            outputRange: [1, 0.8, 10],
          }),
        },
      ],
    };

    const logoOpacity = {
      opacity: loadingProgress.interpolate({
        inputRange: [0, 20, 100],
        outputRange: [1, 0, 0],
        extrapolate: 'clamp',
      }),
    };

    const appScale = {
      transform: [
        {
          scale: loadingProgress.interpolate({
            inputRange: [0, 7, 100],
            outputRange: [1.1, 1.05, 1],
          }),
        },
      ],
    };

    return (
      <View style={[styles.container]}>
        {showStatusBar && (
          <StatusBar
            backgroundColor={backgroundColor}
            animated
            translucent={translucent}
          />
        )}
        {!animationDone && <View style={StyleSheet.absoluteFill} />}
        <View style={styles.containerGlue}>
          {!animationDone && (
            <Animated.View
              style={_staticBackground(logoOpacity, backgroundColor)}
            />
          )}
          <Animated.View
            style={[
              !disableAppScale && appScale,
              opacityClearToVisible,
              styles.flex,
            ]}>
            {this.renderChildren()}
          </Animated.View>
          {!animationDone && (
            <Animated.Image
              resizeMode="cover"
              source={require('../../../assets/images/background.png')}
              style={
                (_staticBackground(logoOpacity, backgroundColor),
                _dynamicImageBackground(
                  imageScale,
                  logoOpacity,
                  backgroundColor,
                ))
              }
            />
          )}
          {!animationDone && (
            <View style={[StyleSheet.absoluteFill, {flex: 1}]}>
              {customComponent ? (
                <Animated.View
                  style={_dynamicCustomComponentStyle(
                    logoScale,
                    logoOpacity,
                    logoWidth,
                    logoHeight,
                  )}>
                  {customComponent}
                </Animated.View>
              ) : (
                <Animated.Image
                  source={logoImage}
                  resizeMode={'contain'}
                  style={_dynamicLogoStyle(
                    logoScale,
                    logoOpacity,
                    logoWidth,
                    logoHeight,
                  )}
                />
              )}
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default AnimatedSplash;
