import * as React from 'react';
import {Image} from 'react-native';
import {useTheme} from '@/contexts/ThemeContext';
import {formatPhone} from '@/utils';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';
import * as UI from '../common';
import styles from '../VoiceMail/styles';
import moment from 'moment';
import OptionMenu from '../OptionMenu';
import {useToast} from 'react-native-toast-notifications';
import Clipboard from '@react-native-clipboard/clipboard';

interface MessageItemProps {
  image?: string;
  name?: string;
  phone: string;
  lastMessage?: string;
  timestamp: number;
  onClick?: (phone: string) => void;
  onVoiceCall?: (phone: string) => void;
  onVideoCall?: (phone: string) => void;
  onDelete?: (phone: string) => void;
  onViewProfile?: (phone: string) => void;
}

const MessageItem: React.FC<MessageItemProps> = ({
  image,
  name,
  phone,
  lastMessage,
  timestamp,
  onClick,
  onVideoCall,
  onVoiceCall,
  onViewProfile,
  onDelete,
}) => {
  const {colors} = useTheme();
  const toast = useToast();

  const handleCopyNumber = async (phone: string) => {
    Clipboard.setString(phone);
    toast.show('Copied to clipboard!');
  };

  return (
    <UI.Block
      center
      row
      justify="space-between"
      style={styles.contactContainer}>
      <OptionMenu
        customButton={
          <UI.Block row width="auto" center>
            <UI.Block width="auto" style={{marginRight: 10}}>
              {image ? (
                <Image source={{uri: image}} style={styles.contactImage} />
              ) : (
                <UI.Icon name="ios-person-circle-sharp" size={hd('4.5%')} />
              )}
            </UI.Block>
            <UI.Block width="auto">
              <UI.Text body>{name || formatPhone(phone)}</UI.Text>
              {lastMessage && (
                <UI.Text color={colors.gray1} size={hd('1.2%')}>
                  {lastMessage.substring(0, 35)}
                  {lastMessage.length >= 35 && '...'}
                </UI.Text>
              )}
            </UI.Block>
          </UI.Block>
        }
        longPress
        destructiveIndex={5}
        onClick={() => onClick && onClick(phone)}
        options={[
          'Voice Call',
          'Video Call',
          'Copy Number',
          'Add to Contacts',
          'View Profile',
          'Delete',
          'Cancle',
        ]}
        actions={[
          onVoiceCall?.bind(null, phone) as any,
          onVideoCall?.bind(null, phone),
          handleCopyNumber.bind(null, phone),
          () => {},
          onViewProfile?.bind(null, phone),
          onDelete?.bind(null, phone),
        ]}
      />

      <UI.Text color={colors.gray2} size={hd('1.2%')}>
        {moment(timestamp).calendar({
          lastDay: '[Yesterday,] LT',
          sameDay: 'LT',
          nextDay: '[Tomorrow,] LT',
          lastWeek: 'MM/DD/YY[,] LT',
          nextWeek: 'MMM D [,] LT',
          sameElse: 'MM/DD/YY[,] LT',
        })}
      </UI.Text>
    </UI.Block>
  );
};

export default MessageItem;
