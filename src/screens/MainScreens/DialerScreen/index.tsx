import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import Dialer from '@/components/Dialer';
import AppStatusBar from '@/components/AppStatusBar';
import {FlatList} from 'react-native';
import {Contact, Recent} from '../HomeScreen/types';
import {useDispatch, useSelector} from 'react-redux';
import {callingType, contactType, SET_CALLING} from '@/store/types';
import ContactItem from '@/components/ContactItem';
import {formatPhone, sortString} from '@/utils';
import navigationService from '@/services/navigationService';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';
import RecentItem from '@/components/RecentItem';
import {IRootState} from '@/store/reducers';

interface DialerScreenProps {
  navigation: any;
}

const recents: Recent[] = [
  {
    id: '1',
    name: 'John Kester',
    phone: '+2348101584839',
    type: 'INCOMING',
    status: 'ANSWERED',
    mode: 'VOICE',
    count: 2,
    timestamp: Date.now(),
  },
  {
    id: '2',
    phone: '+910384935435',
    image: 'https://placekitten.com/60',
    type: 'INCOMING',
    status: 'MISSED',
    mode: 'MAIL',
    count: 0,
    timestamp: Date.now(),
  },
  {
    id: '3',
    phone: '+12458384890',
    type: 'OUTGOING',
    status: 'ANSWERED',
    mode: 'VIDEO',
    count: 0,
    timestamp: Date.now(),
  },
];

const DialerScreen: React.FC<DialerScreenProps> = ({navigation}) => {
  const {colors} = useTheme();
  const [value, setValue] = React.useState('');
  const contactList = useSelector((state: IRootState) => state.contacts);
  const dispatch = useDispatch();

  const [contacts, setContacts] = React.useState<contactType[]>([]);

  const handleStartVoiceCall = (phone: string) => {
    const user = contacts.find(c => c.phone === phone);
    console.log('USER ================> ', user);
    const payload: callingType = {
      user: user || {phone},
      type: 'VOICE',
      showScreen: true,
    };
    dispatch({type: SET_CALLING, payload});
  };

  const handleStartVideoCall = (phone: string) => {
    const user = contacts.find(c => c.phone === phone);
    console.log('USER ================> ', user);
    const payload: callingType = {
      user: user || {phone},
      type: 'VIDEO',
      showScreen: true,
    };
    dispatch({type: SET_CALLING, payload});
  };

  const handleBlacklistContact = (phone: string) => {};

  const handleChangeNumber = (number: string) => {
    if (number === '') {
      setContacts([]);
    } else {
      setContacts(contactList.filter(c => c.phone.includes(number)));
    }
  };

  return (
    <>
      <AppStatusBar barStyle="light-content" backgroundColor={colors.primary} />

      <UI.Block
        backgroundColor={colors.primary}
        style={{paddingHorizontal: wd('4%')}}>
        <UI.Block row>
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon color={colors.gray4} name="arrow-back" size={24} />
          </UI.Clickable>

          <UI.Spacer />

          <UI.Text h1 color={colors.white}>
            Contacts
          </UI.Text>
        </UI.Block>

        <UI.Spacer />
      </UI.Block>

      <UI.Layout noScroll>
        {contacts.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<UI.Spacer medium />}
            ListFooterComponent={<UI.Spacer size={hd('30%')} />}
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
        ) : (
          <FlatList
            ListHeaderComponent={<UI.Spacer />}
            ListFooterComponent={<UI.Spacer size={30} />}
            data={recents.sort((a, b) => a.timestamp - b.timestamp)}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <RecentItem
                onVoiceCall={handleStartVoiceCall}
                onVideoCall={handleStartVideoCall}
                onBlacklist={handleBlacklistContact}
                onMessage={(phone: string) =>
                  navigationService.navigate('Conversation', {phone})
                }
                onProfilePhotoClick={(phone: string) =>
                  navigationService.navigate('Profile', {phone})
                }
                name={item.name}
                phone={item.phone}
                image={item.image}
                timestamp={item.timestamp}
                type={item.type}
                status={item.status}
                mode={item.mode}
                count={item.count}
              />
            )}
          />
        )}
      </UI.Layout>

      <Dialer
        onChangeValue={handleChangeNumber}
        onVideoCall={handleStartVideoCall}
        onVoiceCall={handleStartVoiceCall}
      />
    </>
  );
};

export default DialerScreen;
