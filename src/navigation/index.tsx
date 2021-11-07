import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationFlow from './AuthenticationFlow';
import {useTheme} from '@/contexts/ThemeContext';
import {StatusBar} from 'react-native';
import DashboardFlow from './DashboardFlow';
import {navigationRef} from '@/services';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '@/store/reducers';
import VoiceCallModal from '@/components/VoiceCallModal';
import VideoCallModal from '@/components/VideoCallModal';
import {SET_CALLING, SET_SHOW_SCREEN} from '@/store/types';

export interface NavigationFlowProps {}

const NavigationFlow: React.FC<NavigationFlowProps> = () => {
  const {isDark} = useTheme();
  const {calling} = useSelector((state: IRootState) => state);
  const dispatch = useDispatch();

  const handleCloseCallModal = () => {
    dispatch({type: SET_SHOW_SCREEN, payload: false});
  };

  const handleEndCall = () => {
    dispatch({type: SET_CALLING, payload: {showScreen: false}});
  };

  return (
    <>
      {calling && calling.type === 'VOICE' ? (
        <VoiceCallModal
          onClose={handleCloseCallModal}
          user={calling.user}
          show={calling.showScreen}
          onEndCall={handleEndCall}
        />
      ) : null}

      {calling && calling.type === 'VIDEO' ? (
        <VideoCallModal
          onClose={handleCloseCallModal}
          user={calling.user}
          show={calling.showScreen}
          onEndCall={handleEndCall}
        />
      ) : null}
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
        {/* <AuthenticationFlow /> */}
        <DashboardFlow />
      </NavigationContainer>
    </>
  );
};

export default NavigationFlow;
