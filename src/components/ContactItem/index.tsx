import * as React from 'react';
import {Image} from 'react-native';
import {useTheme} from '@/contexts/ThemeContext';
import {formatPhone} from '@/utils';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';
import OptionsMenu from '../OptionMenu';
import * as UI from '../common';
import styles from './styles';
import Contacts from 'react-native-contacts';
import {contactType, SET_CONTACTS} from '@/store/types';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '@/store/reducers';
import {useToast} from 'react-native-toast-notifications';
import Clipboard from '@react-native-clipboard/clipboard';

interface ContactItemProps extends contactType {
  image?: string;
  name: string;
  phone: string;
  onClick?: (phone: string) => void;
  onVoiceCall?: (phone: string) => void;
  onVideoCall?: (phone: string) => void;
  onBlacklist?: (phone: string) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({
  id,
  image,
  name,
  phone,
  onVideoCall,
  onVoiceCall,
  onBlacklist,
}) => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {contacts} = useSelector((state: IRootState) => state);
  const toast = useToast();

  const handleOpenContact = async (id: string) => {
    const res = await Contacts.getContactById(id);
    Contacts.openExistingContact(res);
  };

  const handleDeleteContact = async (id: string) => {
    try {
      const res = await Contacts.getContactById(id);
      await Contacts.deleteContact(res);
      dispatch({
        type: SET_CONTACTS,
        payload: contacts.filter(c => c.id !== id),
      });
    } catch (e: any) {
      console.log(e);
    }
  };

  const handleCopyNumber = (phone: string) => {
    Clipboard.setString(phone);
    toast.show('Copied to clipboard!');
  };

  console.log(phone);
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
        destructiveIndex={5}
        options={[
          'Voice Call',
          'Video Call',
          'Copy Number',
          'View Profile',
          'Add to Blacklist',
          'Delete',
          'Cancel',
        ]}
        actions={[
          onVoiceCall?.bind(null, phone) as any,
          onVideoCall?.bind(null, phone),
          handleCopyNumber.bind(null, phone),
          handleOpenContact.bind(null, id),
          onBlacklist?.bind(null, phone),
          handleDeleteContact.bind(null, id),
        ]}
      />
    </UI.Block>
  );
};

export default ContactItem;
