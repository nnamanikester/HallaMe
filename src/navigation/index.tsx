import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationFlow from './AuthenticationFlow';
import {useTheme} from '@/contexts/ThemeContext';
import {Platform, StatusBar} from 'react-native';
import DashboardFlow from './DashboardFlow';
import {navigationRef} from '@/services';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '@/store/reducers';
import VoiceCallModal from '@/components/VoiceCallModal';
import VideoCallModal from '@/components/VideoCallModal';
import {SET_CALLING, SET_SHOW_SCREEN} from '@/store/types';
import * as UI from '@/components/common';
import AppStatusBar from '@/components/AppStatusBar';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';

export interface NavigationFlowProps {}

const isIOS = Platform.OS === 'ios';

const NavigationFlow: React.FC<NavigationFlowProps> = () => {
  const {isDark, colors} = useTheme();
  const {calling} = useSelector((state: IRootState) => state);
  const dispatch = useDispatch();

  const showCallModal = (val: boolean) => {
    dispatch({type: SET_SHOW_SCREEN, payload: val});
  };

  const handleEndCall = () => {
    dispatch({type: SET_CALLING, payload: {showScreen: false}});
  };

  return (
    <>
      {calling && calling.type === 'VOICE' ? (
        <VoiceCallModal
          onClose={showCallModal.bind(null, false)}
          user={calling.user}
          show={calling.showScreen}
          onEndCall={handleEndCall}
        />
      ) : null}

      {calling && calling.type === 'VIDEO' ? (
        <VideoCallModal
          onClose={showCallModal.bind(null, false)}
          user={calling.user}
          show={calling.showScreen}
          onEndCall={handleEndCall}
        />
      ) : null}

      {!calling.showScreen && calling.user && (
        <>
          <AppStatusBar
            backgroundColor={colors.primary}
            barStyle="light-content"
          />

          <UI.Clickable
            onClick={showCallModal.bind(null, true)}
            style={{
              top: 0,
              zIndex: 999,
              height: hd('4%'),
              paddingHorizontal: 10,
              backgroundColor: colors.secondary,
              justifyContent: 'center',
            }}>
            <UI.Text color={colors.white} bold>
              Tap to return to call
            </UI.Text>
          </UI.Clickable>
        </>
      )}

      <NavigationContainer ref={navigationRef}>
        {/* <AuthenticationFlow /> */}
        <DashboardFlow />
      </NavigationContainer>
    </>
  );
};

export default NavigationFlow;
