import React, {useState, useRef} from 'react';
import {useTheme} from '@/contexts/ThemeContext';
import {
  Platform,
  ActionSheetIOS,
  UIManager,
  findNodeHandle,
  View,
  Image,
  Text,
  ImageStyle,
} from 'react-native';
import * as UI from '../common';

export interface OptionMenuProps {
  destructiveIndex?: number;
  actions: (() => void)[];
  options: string[];
  longPress?: boolean;
  onClick?: () => void;
  button?: any;
  customButton?: React.ReactNode;
  buttonStyle?: ImageStyle;
}

const OptionMenu: React.FC<OptionMenuProps> = ({
  destructiveIndex,
  actions,
  options,
  longPress,
  onClick,
  customButton,
  button,
  buttonStyle,
}) => {
  const inputRef: any = useRef(null);
  const [open, setOpen] = useState(false);
  const {colors} = useTheme();

  const handleClick = (index?: number) => {
    for (var i = 0; i < options.length; i++) {
      if (index === i) {
        if (index === options.length - 1) {
          const open = false;
          setOpen(open);
        } else {
          if (actions[i] !== null) {
            actions[i]();
          }
        }
      }
    }
  };

  const handlePressWeb = () => {
    setOpen(true);
  };

  const handlePress = () => {
    if (Platform.OS === 'ios') {
      let dI: any = -1;
      if (
        Number.isInteger(destructiveIndex) &&
        (destructiveIndex as number) >= 0
      ) {
        dI = destructiveIndex;
      }
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: options,
          destructiveButtonIndex: dI,
          cancelButtonIndex: options.length - 1,
        },
        buttonIndex => {
          handleClick(buttonIndex);
        },
      );
    } else if (Platform.OS === 'android') {
      UIManager.showPopupMenu(
        findNodeHandle(inputRef.current) as number,
        options,
        () => console.log('something went wrong with the popup menu'),
        (e, i) => {
          handleClick(i);
        },
      );
    }
  };

  let optionList = open ? (
    <View
      style={{
        position: 'absolute',
        bottom: '100%',
        right: '50%',
        flex: 1,
        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        borderRadius: 5,
        backgroundColor: colors.background,
      }}>
      {options.map((option, index) => {
        return (
          <View key={option}>
            <UI.Clickable
              style={{padding: 10}}
              onClick={() => handleClick(index)}>
              <Text style={{textAlign: 'center'}}>{option}</Text>
            </UI.Clickable>

            {index < options.length - 1 && (
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: colors.gray3,
                }}
              />
            )}
          </View>
        );
      })}
    </View>
  ) : null;

  let component = button ? (
    <Image source={button} style={buttonStyle} />
  ) : (
    customButton
  );

  if (Platform.OS === 'web') {
    return (
      <View>
        <View>
          <UI.Clickable ref={inputRef} onClick={handlePressWeb}>
            {component}
          </UI.Clickable>
        </View>
        {optionList}
      </View>
    );
  } else {
    return (
      <View>
        {longPress ? (
          <UI.Clickable
            ref={inputRef}
            onLongPress={handlePress}
            onClick={onClick}>
            {component}
          </UI.Clickable>
        ) : (
          <UI.Clickable ref={inputRef} onClick={handlePress}>
            {component}
          </UI.Clickable>
        )}
      </View>
    );
  }
};

export default OptionMenu;
