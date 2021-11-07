import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import {useTheme} from '@/contexts/ThemeContext';
import {ViewProps} from 'react-native';

export interface IconProps extends ViewProps {
  /**
   * Determined the type of Icon you want to use from the list
   * 'Ionicons' | 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' |
   * 'FontAwesome' | 'FontAwesome5' | 'Fontisto' | 'Foundation' |
   * 'MaterialIcons' | 'MaterialCommunityIcons' | 'Octicons' | 'Zocial' |
   * 'SimpleLineIcons'
   */
  type?:
    | 'Ionicons'
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Fontisto'
    | 'Foundation'
    | 'MaterialIcons'
    | 'MaterialCommunityIcons'
    | 'Octicons'
    | 'Zocial'
    | 'SimpleLineIcons';
  /**
   * Change the color of the Icon
   */
  color?: string;
  /**
   * Change the size of the Icon
   */
  size?: number;
  /**
   * The name of the Icon to use
   */
  name: string;
  /**
   * React stylesheet object for adding extra styles
   */
  style?: object;
}

export const Icon: React.FC<IconProps> = props => {
  const {size = 28, name, color, type = 'Ionicons', style} = props;

  const {colors} = useTheme();

  const IconType = () => {
    switch (type) {
      case 'AntDesign':
        return (
          <AntDesign
            {...props}
            name={name}
            color={color || colors.gray2}
            size={size}
            style={style}
          />
        );
      case 'Entypo':
        return (
          <Entypo
            {...props}
            name={name}
            color={color || colors.gray2}
            size={size}
            style={style}
          />
        );
      case 'EvilIcons':
        return (
          <EvilIcons
            {...props}
            name={name}
            color={color || colors.gray2}
            size={size}
            style={style}
          />
        );
      case 'Feather':
        return (
          <Feather
            {...props}
            name={name}
            color={color || colors.gray2}
            size={size}
            style={style}
          />
        );
      case 'FontAwesome':
        return (
          <FontAwesome
            {...props}
            name={name}
            color={color || colors.gray2}
            size={size}
            style={style}
          />
        );
      case 'FontAwesome5':
        return (
          <FontAwesome5
            {...props}
            name={name}
            color={color || colors.gray2}
            size={size}
            style={style}
          />
        );
      case 'Fontisto':
        return (
          <Fontisto
            {...props}
            name={name}
            color={color || colors.gray2}
            size={size}
            style={style}
          />
        );
      case 'Foundation':
        return (
          <Foundation
            {...props}
            name={name}
            color={color || colors.gray2}
            size={size}
            style={style}
          />
        );
      case 'Ionicons':
        return (
          <Ionicons
            {...props}
            name={name}
            color={color || colors.gray2}
            size={size}
            style={style}
          />
        );
      case 'MaterialIcons':
        return (
          <MaterialIcons
            {...props}
            name={name}
            color={color || colors.gray2}
            size={size}
            style={style}
          />
        );
      case 'MaterialCommunityIcons':
        return (
          <MaterialCommunityIcons
            {...props}
            name={name}
            color={color || colors.gray2}
            size={size}
            style={style}
          />
        );
      case 'Octicons':
        return (
          <Octicons
            {...props}
            name={name}
            color={color || colors.gray2}
            size={size}
            style={style}
          />
        );
      case 'Zocial':
        return (
          <Zocial
            {...props}
            name={name}
            color={color || colors.gray2}
            size={size}
            style={style}
          />
        );
      case 'SimpleLineIcons':
        return (
          <SimpleLineIcons
            {...props}
            name={name}
            color={color || colors.gray2}
            size={size}
            style={style}
          />
        );
      default:
        return (
          <Ionicons
            {...props}
            name={name}
            color={color || colors.gray2}
            size={size}
            style={style}
          />
        );
    }
  };
  return <IconType />;
};
