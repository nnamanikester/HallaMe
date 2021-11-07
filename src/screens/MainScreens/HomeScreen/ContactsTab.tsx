import * as React from 'react';
import * as UI from '@/components/common';
import {FlatList} from 'react-native';
import ContactItem from '@/components/ContactItem';
import {Contact} from './types';
import {sortString} from '@/utils';
import {useDispatch} from 'react-redux';
import {callingType, SET_CALLING} from '@/store/types';
import navigationService from '@/services/navigationService';

interface ContactsTabProps {}

const contactProfiles: Contact[] = [
  {
    id: '1',
    name: 'John Kester',
    phone: '+2348101938493',
    image: 'https://placekitten.com/60',
  },
  {
    id: '2',
    name: '+910384935435',
    phone: '+910384935435',
    image: 'https://placekitten.com/60',
  },
  {
    id: '3',
    name: 'Bob Frapples',
    phone: '+12458384890',
  },
  {
    id: '4',
    name: 'Maya Didas',
    phone: '+12023304939',
  },
  {
    id: '5',
    name: 'Zack Lee',
    phone: '+12023304939',
    image: 'https://placekitten.com/60',
  },
  {
    id: '6',
    name: 'Kerry Oaky',
    phone: '+12023304939',
  },
  {
    id: '7',
    phone: '+12023304939',
    name: '+12023304939',
  },
  {
    id: '8',
    phone: '+12023304939',
    name: '+12023304939',
    image: 'https://placekitten.com/60',
  },
  {
    id: '9',
    name: 'Ed Itorial',
    phone: '+12023304939',
  },
  {
    id: '10',
    name: 'Louise Ville',
    phone: '+12023304939',
  },
  {
    id: '11',
    name: 'John Kester',
    phone: '+2348101938493',
    image: 'https://placekitten.com/60',
  },
  {
    id: '12',
    name: 'Petey Cruiser',
    phone: '+910384935435',
  },
  {
    id: '13',
    name: 'Bob Frapples',
    phone: '+12458384890',
  },
  {
    id: '14',
    phone: '+12023304939',
    name: '+12023304939',
    image: 'https://placekitten.com/60',
  },
  {
    id: '15',
    name: 'Zack Lee',
    phone: '+12023304939',
  },
  {
    id: '16',
    name: 'Kerry Oaky',
    phone: '+12023304939',
    image: 'https://placekitten.com/60',
  },
  {
    id: '17',
    name: 'Kerry Oaky',
    phone: '+12023304939',
  },
  {
    id: '18',
    name: 'Marcus Down',
    phone: '+12023304939',
    image: 'https://placekitten.com/60',
  },
  {
    id: '19',
    name: 'Ed Itorial',
    phone: '+12023304939',
  },
  {
    id: '20',
    name: 'Louise Ville',
    phone: '+12023304939',
  },
];

const ContactsTab: React.FC<ContactsTabProps> = () => {
  const fetchContacts = async () => {};

  React.useEffect(() => {
    fetchContacts();
  });

  const dispatch = useDispatch();

  const [contacts, setContacts] = React.useState<Contact[]>(contactProfiles);

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

  const handleDeleteContact = (phone: string) => {
    setContacts(contacts.filter(c => c.phone !== phone));
  };

  return (
    <>
      <UI.Layout noScroll style={{paddingHorizontal: 0}}>
        <FlatList
          ListHeaderComponent={<UI.Spacer />}
          ListFooterComponent={<UI.Spacer size={30} />}
          data={contacts.sort((a, b) => sortString(a.name, b.name))}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ContactItem
              onVoiceCall={handleStartVoiceCall}
              onVideoCall={handleStartVideoCall}
              onBlacklist={handleBlacklistContact}
              onDelete={handleDeleteContact}
              onViewProfile={phone =>
                navigationService.navigate('Profile', {phone})
              }
              name={item.name}
              image={item.image}
              phone={item.phone}
            />
          )}
        />
      </UI.Layout>
    </>
  );
};

export default ContactsTab;
