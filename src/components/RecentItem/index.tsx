import * as React from 'react';
import {Image} from 'react-native';
import {useTheme} from '@/contexts/ThemeContext';
import {formatPhone} from '@/utils';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';
import OptionsMenu from '../OptionMenu';
import * as UI from '../common';
import styles from './styles';
import moment from 'moment';
import Clipboard from '@react-native-clipboard/clipboard';
import {useToast} from 'react-native-toast-notifications';

// Date Format: mm/dd/yyyy H:i A

interface RecentItemProps {
  image?: string;
  name?: string;
  phone: string;
  timestamp: number;
  type: 'INCOMING' | 'OUTGOING';
  status: 'MISSED' | 'ANSWERED';
  mode: 'VIDEO' | 'VOICE' | 'MAIL';
  count?: number;
  onProfilePhotoClick?: (phone: string) => void;
  onClick?: (phone: string) => void;
  onVoiceCall?: (phone: string) => void;
  onVideoCall?: (phone: string) => void;
  onMessage?: (phone: string) => void;
  onDelete?: (phone: string) => void;
  onBlacklist?: (phone: string) => void;
}

const RecentItem: React.FC<RecentItemProps> = ({
  image,
  name,
  phone,
  timestamp,
  type,
  status,
  mode,
  count,
  onProfilePhotoClick,
  onClick,
  onVoiceCall,
  onVideoCall,
  onMessage,
  onDelete,
  onBlacklist,
}) => {
  const {colors} = useTheme();
  const toast = useToast();

  const handleCopyNumber = async (phone: string) => {
    Clipboard.setString(phone);
    toast.show('Copied to clipboard!');
  };

  return (
    <UI.Block row justify="space-between" style={styles.contactContainer}>
      <UI.Block row width="auto" center>
        <UI.Clickable
          onClick={() => onProfilePhotoClick && onProfilePhotoClick(phone)}>
          <UI.Block width="auto" style={{marginRight: 10}}>
            {image ? (
              <Image source={{uri: image}} style={styles.contactImage} />
            ) : (
              <UI.Icon name="ios-person-circle-sharp" size={hd('4.5%')} />
            )}
            <UI.Block width="auto" style={styles.callType}>
              <UI.Icon
                color={colors.primary}
                size={hd('2%')}
                name={mode === 'VIDEO' ? 'ios-videocam' : 'ios-call'}
              />
            </UI.Block>
          </UI.Block>
        </UI.Clickable>

        <OptionsMenu
          customButton={
            <UI.Block width="auto">
              <UI.Text body>
                {name || formatPhone(phone)} {count ? `(${count})` : null}
              </UI.Text>

              <UI.Block row center>
                {type === 'INCOMING' && (
                  <UI.Icon
                    color={
                      status === 'ANSWERED' ? colors.secondary : colors.danger
                    }
                    size={hd('2%')}
                    name="arrow-bottom-left"
                    type="MaterialCommunityIcons"
                  />
                )}
                {type === 'OUTGOING' && (
                  <UI.Icon
                    color={
                      status === 'ANSWERED' ? colors.secondary : colors.danger
                    }
                    size={hd('2%')}
                    name="arrow-top-right"
                    type="MaterialCommunityIcons"
                  />
                )}
                <UI.Text color={colors.gray1} size={hd('1.2%')}>
                  {moment(timestamp).calendar({
                    lastDay: '[Yesterday,] LT',
                    sameDay: '[Today,] LT',
                    nextDay: '[Tomorrow,] LT',
                    lastWeek: 'MMM D [,] LT',
                    nextWeek: 'MMM D [,] LT',
                    sameElse: 'MMM D [,] LT',
                  })}
                </UI.Text>
              </UI.Block>
            </UI.Block>
          }
          destructiveIndex={5}
          options={[
            'Voice Call',
            'Video Call',
            'Copy Number',
            'Add to Contacts',
            'Add to Blacklist',
            'Delete',
            'Cancel',
          ]}
          actions={[
            onVoiceCall?.bind(null, phone) as any,
            onVideoCall?.bind(null, phone),
            handleCopyNumber.bind(null, phone),
            onBlacklist?.bind(null, phone),
            onDelete?.bind(null, phone),
          ]}
        />
      </UI.Block>

      <UI.Block row width="auto">
        <UI.Clickable
          onClick={() =>
            mode === 'VOICE'
              ? onVoiceCall && onVoiceCall(phone)
              : onVideoCall && onVideoCall(phone)
          }
          style={[styles.actionButton, {borderColor: colors.gray4}]}>
          <UI.Icon
            color={colors.secondary}
            name={mode === 'VOICE' ? 'ios-call' : 'ios-videocam'}
            size={hd('2%')}
          />
        </UI.Clickable>

        <UI.Spacer />

        <UI.Clickable
          onClick={() => onMessage && onMessage(phone)}
          style={[styles.actionButton, {borderColor: colors.gray4}]}>
          <UI.Icon
            color={colors.primary}
            name="ios-chatbubble-ellipses"
            size={hd('2%')}
          />
        </UI.Clickable>
      </UI.Block>
    </UI.Block>
  );
};

export default RecentItem;
