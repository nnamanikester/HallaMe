import * as React from 'react';
import {useTheme} from '@/contexts/ThemeContext';
import * as UI from '@/components/common';
import AppStatusBar from '@/components/AppStatusBar';
import navigationService from '@/services/navigationService';

interface ProfileScreenProps {
  navigation: any;
}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const {colors} = useTheme();

  return (
    <>
      <AppStatusBar
        backgroundColor={colors.background}
        barStyle={'dark-content'}
      />

      <UI.Layout>
        <UI.Text h1>Profile Screen</UI.Text>

        <UI.Button
          transparent
          onClick={() => navigationService.navigate('Home')}>
          <UI.Text>Click Here</UI.Text>
        </UI.Button>
      </UI.Layout>
    </>
  );
};

export default ProfileScreen;
