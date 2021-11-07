import {useTheme} from '@/contexts/ThemeContext';
import React from 'react';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppStatusBar from '../AppStatusBar';
import * as UI from '../common';

interface SplashScreenProps {}

const SplashScreen: React.FC<SplashScreenProps> = () => {
  const {colors} = useTheme();
  return (
    <>
      <AppStatusBar backgroundColor={colors.green1} />
      <LinearGradient
        style={{flex: 1, width: '100%'}}
        colors={[colors.green1, colors.green2]}>
        <UI.Block middle flex>
          <UI.Block center>
            <Image
              style={{width: 60, height: 60}}
              source={require('../../../assets/images/icon-white.png')}
            />
          </UI.Block>
          <UI.Spacer />
          <UI.Block center>
            <UI.Text h1 color={colors.white}>
              Rodi Cash
            </UI.Text>
            <UI.Spacer />
            <UI.Text color={colors.gray4}>
              The new vibes to withdrawing cash
            </UI.Text>
          </UI.Block>
        </UI.Block>
      </LinearGradient>
    </>
  );
};

export default SplashScreen;
