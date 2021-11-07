import React from 'react';
import {
  TextInput as TI,
  View,
  StyleSheet,
  Platform,
  LayoutAnimation,
  UIManager,
  TextInputProps as TIProps,
  ViewStyle,
  TextStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';
import {Text} from '../Text';
import {Block} from '../Block';
import {useTheme} from '@/contexts/ThemeContext';

const isIOS = Platform.OS === 'ios';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export interface TextInputProps extends TIProps {
  password?: boolean;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  error?: boolean;
  type?: 'normal' | 'disabled' | 'outline' | 'ghost' | 'underline';
  shape?: 'normal' | 'rounded';
  rows?: number;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  floatLabel?: boolean;
  ref?: any;
}

export const TextInput: React.FC<TextInputProps> = props => {
  const {colors} = useTheme();

  const [active, setActive] = React.useState(false);

  const {
    onFocus,
    onBlur,
    onEndEditing,
    password,
    rows,
    iconRight,
    iconLeft,
    error,
    type,
    shape,
    containerStyle,
    floatLabel,
    placeholder,
    inputStyle,
    ref,
  } = props;

  let iconLeftStyle: ViewStyle = {
    paddingLeft: iconLeft ? 30 : 20,
  };
  let iconRightStyle: ViewStyle = {
    paddingRight: iconRight ? 30 : 20,
  };
  const errorStyle: TextStyle = error
    ? {color: colors.danger, borderWidth: 1.5, borderColor: colors.danger}
    : {};
  let shapeStyle: ViewStyle = {
    borderRadius: shape === 'rounded' ? 50 : shape === 'normal' ? 10 : 100,
  };
  let typeStyle: TextStyle = {};
  let editable = true;

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRadius: 100,
    },
    input: {
      borderWidth: 0,
      height: isIOS ? hd('5') : hd('6.5%'),
      color: colors.text,
      fontSize: isIOS ? hd('1.5%') : hd('2%'),
      fontFamily: 'Gordita-Regular',
      flex: 1,
      backgroundColor: colors.gray4,
      paddingLeft: 20,
    },
    iconLeft: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
      position: 'absolute',
      left: 5,
      zIndex: 10,
    },
    iconRight: {
      alignItems: 'center',
      paddingHorizontal: 20,
      position: 'absolute',
      right: 0,
      zIndex: 10,
    },
  });

  switch (type) {
    case 'disabled':
      editable = false;
      break;
    case 'outline':
      typeStyle = {
        borderWidth: 1,
        borderColor: colors.primary,
      };
      break;
    case 'ghost':
      typeStyle = {
        elevation: 2,
      };
      break;
    case 'underline':
      typeStyle = {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: colors.text,
      };
      break;
    default:
      typeStyle = {};
      break;
  }

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    LayoutAnimation.easeInEaseOut();
    if (onFocus) {
      onFocus(e);
    }
    return setActive(true);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (onBlur) {
      onBlur(e);
    }
    return setActive(false);
  };

  React.useEffect(() => {
    LayoutAnimation.easeInEaseOut();
  }, [active]);

  return (
    <View style={{/* marginTop: active ? 5 : 0, */ ...containerStyle}}>
      {floatLabel ? (
        <Block style={{paddingLeft: 10, marginBottom: -10, zIndex: 1}}>
          <Text size={hd('1.7%')} color={colors.primary}>
            {placeholder}
          </Text>
        </Block>
      ) : null}
      <View style={{...styles.container}}>
        {iconLeft ? <View style={{...styles.iconLeft}}>{iconLeft}</View> : null}
        <TI
          onEndEditing={onEndEditing}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={password}
          numberOfLines={rows}
          textBreakStrategy="highQuality"
          placeholderTextColor={
            active && props.value && props.value.length > 0
              ? 'transparent'
              : colors.gray2
          }
          editable={editable}
          style={{
            ...styles.input,
            ...iconLeftStyle,
            ...iconRightStyle,
            ...errorStyle,
            ...typeStyle,
            ...shapeStyle,
            borderColor: error
              ? colors.danger
              : type === 'underline'
              ? colors.gray2
              : colors.primary,
            ...inputStyle,
          }}
          {...props}
          ref={ref}
        />
        {iconRight ? (
          <View style={{...styles.iconRight}}>{iconRight}</View>
        ) : null}
      </View>
    </View>
  );
};
