import React from 'react';
import {Linking, StyleSheet, TextStyle} from 'react-native';
import {Text} from '../Text';
import {Clickable, ClickableProps} from '../Clickable';
import {useTheme} from '@/contexts/ThemeContext';

export interface LinkProps extends ClickableProps {
  /**
   * A string containing a destination url. same with href
   */
  to?: string;
  /**
   * Style to be applied to link text
   */
  textStyle?: TextStyle;
  /**
   * Color of the text
   */
  color?: string;
}

export const Link: React.FC<LinkProps> = props => {
  const {children, to, textStyle, onClick, style, color} = props;
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    link: {
      width: 'auto',
    },
  });

  return (
    <Clickable
      {...props}
      style={[styles.link, style]}
      onClick={to ? () => Linking.openURL(to) : onClick}>
      <Text bold style={textStyle} color={color || colors.secondary}>
        {children}
      </Text>
    </Clickable>
  );
};
