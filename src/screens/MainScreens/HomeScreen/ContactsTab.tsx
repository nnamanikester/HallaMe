import * as React from 'react';
import * as UI from '@/components/common';
import {FlatList} from 'react-native';
import ContactItem from '@/components/ContactItem';
import {Contact} from './types';
import {sortString} from '@/utils';
import {useDispatch, useSelector} from 'react-redux';
import {callingType, SET_CALLING} from '@/store/types';
import navigationService from '@/services/navigationService';
import FAB from '@/components/FAB';
import {IRootState} from '@/store/reducers';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';
import {useTheme} from '@/contexts/ThemeContext';
import Contacts from 'react-native-contacts';

interface ContactsTabProps {}

const ContactsTab: React.FC<ContactsTabProps> = () => {
  const {colors} = useTheme();
  const contacts = useSelector((state: IRootState) => state.contacts);
  const dispatch = useDispatch();

  const handleStartVoiceCall = (phone: string) => {
    const user = contacts.find(c => c.phone === phone);
    console.log('USER ================> ', user);
    if (user) {
      const payload: callingType = {
        user,
        type: 'VOICE',
        showScreen: true,
      };
      dispatch({type: SET_CALLING, payload});
    }
  };

  const handleStartVideoCall = (phone: string) => {
    const user = contacts.find(c => c.phone === phone);
    console.log('USER ================> ', user);
    if (user) {
      const payload: callingType = {
        user,
        type: 'VIDEO',
        showScreen: true,
      };
      dispatch({type: SET_CALLING, payload});
    }
  };

  const handleBlacklistContact = (phone: string) => {};

  return (
    <>
      <UI.Layout noScroll style={{paddingHorizontal: 0}}>
        <FlatList
          ListHeaderComponent={<UI.Spacer medium />}
          ListFooterComponent={<UI.Spacer size={30} />}
          data={contacts.sort((a, b) => sortString(a.name, b.name))}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ContactItem
              onVoiceCall={handleStartVoiceCall}
              onVideoCall={handleStartVideoCall}
              onBlacklist={handleBlacklistContact}
              name={item.name}
              image={item.image}
              phone={item.phone}
              id={item.id}
              isHallaMeUser={item.isHallaMeUser}
            />
          )}
        />
      </UI.Layout>

      <FAB name="keypad" onClick={() => navigationService.navigate('Dialer')} />
    </>
  );
};

export default ContactsTab;
