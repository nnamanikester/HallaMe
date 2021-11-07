import * as React from 'react';
import * as UI from '@/components/common';
import {Image, ImageBackground, Modal, Platform} from 'react-native';
import styles from './styles';
import {useTheme} from '@/contexts/ThemeContext';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';
import navigationService from '@/services/navigationService';
import {userType} from '@/store/types';

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
      <Modal animationType="fade" visible={show}>
        <ImageBackground
          blurRadius={2}
          style={styles.backgroundImage}
          source={{uri: user?.image}}
        />
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
          <UI.Spacer size={hd('8%')} />

          <UI.Block
            width="auto"
            center
            style={[styles.avatarContainer, {borderColor: colors.white}]}>
            <Image style={styles.avatar} source={{uri: user?.image}} />
          </UI.Block>

          <UI.Spacer medium />

          <UI.Text color={colors.white}>Calling...</UI.Text>

          <UI.Spacer large />

          <UI.Block style={styles.buttonContainer}>
            <UI.Block row justify="space-between">
              <UI.Clickable>
                <UI.Block
                  center
                  middle
                  backgroundColor={`${colors.white}55`}
                  style={styles.button}>
                  <UI.Icon color={colors.white} name="ios-videocam" />
                </UI.Block>
              </UI.Clickable>

              <UI.Clickable>
                <UI.Block
                  center
                  middle
                  backgroundColor={`${colors.white}55`}
                  style={styles.button}>
                  <UI.Icon color={colors.white} name="ios-pause" />
                </UI.Block>
              </UI.Clickable>

              <UI.Clickable>
                <UI.Block
                  center
                  middle
                  backgroundColor={`${colors.white}55`}
                  style={styles.button}>
                  <UI.Icon color={colors.white} name="ios-person" />
                </UI.Block>
              </UI.Clickable>
            </UI.Block>

            <UI.Spacer large />

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
                  <UI.Icon color={colors.white} name="ios-keypad" />
                </UI.Block>
              </UI.Clickable>

              <UI.Clickable>
                <UI.Block
                  center
                  middle
                  backgroundColor={`${colors.white}55`}
                  style={styles.button}>
                  <UI.Icon color={colors.white} name="ios-volume-high" />
                </UI.Block>
              </UI.Clickable>
            </UI.Block>

            <UI.Spacer large />

            <UI.Block center>
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
          </UI.Block>
        </UI.Block>
      </Modal>
    </>
  );
};

export default VideoCallModal;
