import React from 'react';
import {View, ViewProps, ViewStyle, Platform} from 'react-native';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';

const isIOS = Platform.OS === 'ios';

export interface SpacerProps extends ViewProps {
  large?: boolean;
  small?: boolean;
  medium?: boolean;
  horizontal?: boolean;
  vertical?: boolean;
  size?: number;
}

export const Spacer: React.FC<SpacerProps> = ({
  large,
  size = isIOS ? hd('0.6%') : hd('0.8%'),
  small,
  medium,
  horizontal,
  vertical,
}) => {
  let value: ViewStyle = {
    margin: small
      ? isIOS
        ? hd('0.6%')
        : hd('0.8%')
      : medium
      ? hd('1.2%')
      : large
      ? hd('2.4%')
      : size,
  };

  if (horizontal) {
    value = {
      marginHorizontal: small
        ? hd('0.8%')
        : medium
        ? hd('1.2%')
        : large
        ? hd('2.4%')
        : size,
    };
  }
  if (vertical) {
    value = {
      marginVertical: small
        ? hd('0.8%')
        : medium
        ? hd('12%')
        : large
        ? hd('2.4%')
        : size,
    };
  }

  return <View style={value} />;
};
