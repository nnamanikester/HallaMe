import * as React from 'react';
import * as UI from '@/components/common';
import {Image, ImageBackground, Modal, Platform} from 'react-native';
import styles from './styles';
import {useTheme} from '@/contexts/ThemeContext';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';
import navigationService from '@/services/navigationService';
import {userType} from '@/store/types';
import AppStatusBar from '../AppStatusBar';
import {formatPhone} from '@/utils';

interface VideoCallModalProps {
  show: boolean;
  onClose?: () => void;
  onEndCall?: () => void;
  user?: userType;
}

const isIOS = Platform.OS === 'ios';

const VideoCallModal: React.FC<VideoCallModalProps> = ({
  show,
  onClose,
  user,
  onEndCall,
}) => {
  const {colors} = useTheme();

  return (
    <>
      <AppStatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <Modal animationType="fade" visible={show}>
        <UI.Layout
          noScroll
          style={{backgroundColor: colors.primary, paddingHorizontal: 0}}>
          <UI.Block style={styles.overlay} backgroundColor={colors.black} />

          <UI.Block right style={styles.header}>
            <UI.Clickable onClick={onClose}>
              <UI.Icon
                size={24}
                name="ios-chevron-down-outline"
                color={colors.white}
              />
            </UI.Clickable>
          </UI.Block>

          <UI.Block style={styles.container} flex middle>
            <UI.Spacer size={hd('10%')} />

            <UI.Block
              width="auto"
              center
              style={[styles.avatarContainer, {borderColor: colors.white}]}>
              <Image style={styles.avatar} source={{uri: user?.image}} />
            </UI.Block>

            <UI.Spacer medium />

            <UI.Text color={colors.white} bold>
              {user?.name || formatPhone(user?.phone as any) || user?.phone}
            </UI.Text>
            <UI.Text color={colors.white} note>
              Calling...
            </UI.Text>

            <UI.Spacer large />

            <UI.Block style={styles.buttonContainer} flex bottom>
              <UI.Block row justify="space-between">
                <UI.Clickable>
                  <UI.Block
                    center
                    middle
                    backgroundColor={`${colors.white}55`}
                    style={styles.button}>
                    <UI.Icon color={colors.white} name="ios-mic-off" />
                  </UI.Block>
                </UI.Clickable>

                <UI.Clickable>
                  <UI.Block
                    center
                    middle
                    backgroundColor={`${colors.white}55`}
                    style={styles.button}>
                    <UI.Icon
                      type="MaterialIcons"
                      color={colors.white}
                      name="videocam-off"
                    />
                  </UI.Block>
                </UI.Clickable>

                <UI.Clickable>
                  <UI.Block
                    center
                    middle
                    backgroundColor={`${colors.white}55`}
                    style={styles.button}>
                    <UI.Icon
                      color={colors.white}
                      name="ios-camera-reverse-sharp"
                    />
                  </UI.Block>
                </UI.Clickable>

                <UI.Clickable onClick={onEndCall}>
                  <UI.Block
                    center
                    middle
                    backgroundColor={colors.danger}
                    style={styles.button}>
                    <UI.Icon
                      color={colors.white}
                      name="phone-hangup"
                      type="MaterialCommunityIcons"
                    />
                  </UI.Block>
                </UI.Clickable>
              </UI.Block>

              <UI.Spacer large />
            </UI.Block>
          </UI.Block>
        </UI.Layout>
      </Modal>
    </>
  );
};

export default VideoCallModal;
