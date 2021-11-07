import React from 'react';
import SmoothPin from 'react-native-smooth-pincode-input';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';
import {TextInputProps} from 'react-native';
import {useTheme} from '@/contexts/ThemeContext';

export interface PinInputProps extends TextInputProps {
  onFinish?: (value: string) => void;
  password?: boolean;
  length?: number;
  numbersOnly?: boolean;
  editable?: boolean;
  containerStyle?: Object;
  focusedStyle?: Object;
  cellStyle?: Object;
  error?: boolean;
  cellSpacing?: number;
}

const PinInput: React.FC<PinInputProps> = ({
  keyboardType = 'number-pad',
  length = 6,
  value,
  onChangeText,
  onFinish,
  password,
  autoFocus,
  numbersOnly,
  editable,
  placeholder,
  containerStyle,
  focusedStyle,
  cellStyle,
  error,
  cellSpacing = wd('4%'),
}) => {
  const {colors} = useTheme();

  return (
    <>
      <SmoothPin
        value={value}
        onTextChange={onChangeText}
        onFulfill={onFinish}
        textStyle={{
          fontSize: hd('3%'),
          fontWeight: 'bold',
          color: error ? colors.warning : colors.text,
        }}
        cellStyle={{
          borderWidth: 1,
          borderRadius: 10,
          borderColor: error ? colors.warning : colors.gray3,
          width: wd('10%'),
          height: hd('7%'),
          ...cellStyle,
        }}
        cellStyleFocused={{
          borderColor: error ? colors.warning : colors.primary,
          borderWidth: 1.5,
          backgroundColor: colors.background,
          elevation: 10,
          shadowColor: colors.primary,
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          ...focusedStyle,
        }}
        containerStyle={{
          width: wd('90%'),
          ...containerStyle,
        }}
        password={password}
        codeLength={length}
        placeholder={placeholder}
        autoFocus={autoFocus}
        editable={editable}
        restrictToNumbers={numbersOnly}
        onBackspace={() => {}}
        keyboardType={keyboardType}
        cellSpacing={cellSpacing}
      />
    </>
  );
};

export {PinInput};
