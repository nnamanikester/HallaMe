import * as React from 'react';
import {Image} from 'react-native';
import {useTheme} from '@/contexts/ThemeContext';
import {formatPhone} from '@/utils';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';
import OptionsMenu from '../OptionMenu';
import * as UI from '../common';
import styles from './styles';

interface ContactItemProps {
  image?: string;
  name?: string;
  phone: string;
  onClick?: (phone: string) => void;
  onVoiceCall?: (phone: string) => void;
  onVideoCall?: (phone: string) => void;
  onViewProfile?: (phone: string) => void;
  onBlacklist?: (phone: string) => void;
  onDelete?: (phone: string) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({
  image,
  name,
  phone,
  onVideoCall,
  onVoiceCall,
  onViewProfile,
  onBlacklist,
  onDelete,
}) => {
  const {colors} = useTheme();

  return (
    <UI.Block justify="space-between" style={styles.contactContainer}>
      <OptionsMenu
        customButton={
          <UI.Block width="100%" row center>
            <UI.Block width="auto" style={{marginRight: 10}}>
              {image ? (
                <Image source={{uri: image}} style={styles.contactImage} />
              ) : (
                <UI.Icon name="ios-person-circle-sharp" size={hd('4.5%')} />
              )}
            </UI.Block>
            <UI.Block width="auto">
              {name !== phone ? (
                <>
                  <UI.Text body>{name}</UI.Text>
                  <UI.Text color={colors.gray1} note>
                    {formatPhone(phone)}
                  </UI.Text>
                </>
              ) : (
                <UI.Text body>{formatPhone(phone)}</UI.Text>
              )}
            </UI.Block>
          </UI.Block>
        }
        destructiveIndex={4}
        options={[
          'Voice Call',
          'Video Call',
          'View Profile',
          'Add to Blacklist',
          'Delete',
          'Cancel',
        ]}
        actions={[
          onVoiceCall?.bind(null, phone),
          onVideoCall?.bind(null, phone),
          onViewProfile?.bind(null, phone),
          onBlacklist?.bind(null, phone),
          onDelete?.bind(null, phone),
        ]}
      />
    </UI.Block>
  );
};

export default ContactItem;
