import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '@/contexts/ThemeContext';
import {ColorsState} from '@/constants/index';
import {Clickable, ClickableProps} from '../Clickable';

const isIOS = Platform.OS === 'ios';

interface ButtonProps extends ClickableProps {
  /**
   * Defines the gradient color of the button.
   */
  colors?: [string, string];

  /**
   * Defines the type of button to render.
   */
  primary?: boolean;

  /**
   * Defines the type of button to render.
   */
  white?: boolean;

  /**
   * Defines the type of button to render.
   */
  transparent?: boolean;

  /**
   * Defines the type of button to render.
   */
  secondary?: boolean;
  /**
   * Defines the type of button to render.
   */
  type?: 'normal' | 'outline' | 'disabled' | 'ghost';
  /**
   * Defines the size of the button
   * `small` or `large`
   */
  size?: 'small' | 'large';
  /**
   * An element to show at the left of the button component
   */
  iconLeft?: React.ReactNode;
  /**
   * An element to show at the right of the button component
   */
  iconRight?: React.ReactNode;
  /**
   * Shows or hides the a divider between the Icons if exists
   */
  showIconDivider?: boolean;
}

export interface ButtonIconProps {
  colors: ColorsState;
  showIconDivider?: boolean;
}

let smallStyle = {};
let typeStyle = {};
let disabled = 0.8;

export const Button: React.FC<ButtonProps> = props => {
  const {
    children,
    onClick,
    size,
    type,
    iconRight,
    iconLeft,
    showIconDivider,
    primary,
    secondary,
    white,
    colors: colours,
    transparent,
    style,
  } = props;
  const {colors} = useTheme();
  const orangeGradient = [colors.orange1, colors.orange2];
  const greenGradient = [colors.green1, colors.green2];
  const transparentGradient = [colors.transparent, colors.transparent];
  const whiteGradient = [colors.white, colors.white];
  const disabledGradient = [colors.gray3, colors.gray3];

  const styles = StyleSheet.create({
    button: {
      borderRadius: 10,
      height: isIOS ? hd('5%') : hd('6%'),
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
    },
    iconLeft: {
      alignItems: 'center',
      borderRightWidth: 1,
      borderRightColor: colors.gray1,
      paddingHorizontal: 15,
    },
    iconRight: {
      alignItems: 'center',
      borderLeftWidth: 1,
      borderLeftColor: colors.gray1,
      paddingHorizontal: 15,
    },
  });

  switch (type) {
    case 'outline':
      typeStyle = {
        borderWidth: 1.5,
        borderColor: colors.gray3,
        backgroundColor: colors.background,
      };
      break;
    case 'ghost':
      typeStyle = {
        backgroundColor: colors.transparent,
        elevation: 0,
      };
      break;
    default:
      typeStyle = {};
      break;
  }

  switch (size) {
    case 'small':
      smallStyle = {
        width: widthPercentageToDP('44%'),
      };
      break;
    case 'large':
      smallStyle = {
        width: '100%',
      };
      break;
    default:
      smallStyle = {
        width: '100%',
      };
      break;
  }

  return (
    <Clickable
      {...props}
      onClick={type === 'disabled' ? undefined : onClick}
      activeOpacity={disabled}>
      <LinearGradient
        colors={
          colours
            ? colours
            : primary
            ? greenGradient
            : secondary
            ? orangeGradient
            : transparent
            ? transparentGradient
            : white
            ? whiteGradient
            : type === 'disabled'
            ? disabledGradient
            : whiteGradient
        }
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{
          ...styles.button,
          ...smallStyle,
          ...typeStyle,
          ...style,
        }}>
        {iconLeft ? (
          <View
            style={{
              ...styles.iconLeft,
              borderColor: colors.gray4,
              borderRightWidth: showIconDivider ? 1 : 0,
            }}>
            {iconLeft}
          </View>
        ) : null}
        {children}
        {iconRight ? (
          <View
            style={{
              ...styles.iconRight,
              borderLeftWidth: showIconDivider ? 1 : 0,
              borderColor: colors.gray4,
            }}>
            {iconRight}
          </View>
        ) : null}
      </LinearGradient>
    </Clickable>
  );
};
