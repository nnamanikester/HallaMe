import * as React from 'react';
import {FlatList} from 'react-native';
import * as UI from '@/components/common';
import {Recent} from './types';
import RecentItem from '@/components/RecentItem';
import navigationService from '@/services/navigationService';
import {useDispatch} from 'react-redux';
import {callingType, SET_CALLING} from '@/store/types';

interface RecentTabProps {}

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
  {
    id: '4',
    name: 'Maya Didas',
    phone: '+910384935435',
    type: 'OUTGOING',
    status: 'MISSED',
    mode: 'MAIL',
    count: 0,
    timestamp: Date.now(),
  },
  {
    id: '5',
    phone: '+12023304939',
    image: 'https://placekitten.com/60',
    type: 'OUTGOING',
    status: 'ANSWERED',
    mode: 'VIDEO',
    count: 3,
    timestamp: Date.now(),
  },
  {
    id: '6',
    name: 'Kerry Oaky',
    phone: '+910384935435',
    type: 'INCOMING',
    status: 'ANSWERED',
    mode: 'VOICE',
    count: 0,
    timestamp: Date.now(),
  },
  {
    id: '7',
    phone: '+12023304939',
    type: 'INCOMING',
    status: 'MISSED',
    mode: 'VOICE',
    count: 0,
    timestamp: Date.now(),
  },
  {
    id: '8',
    phone: '+12023304939',
    image: 'https://placekitten.com/60',
    type: 'OUTGOING',
    status: 'MISSED',
    mode: 'VOICE',
    count: 0,
    timestamp: Date.now(),
  },
  {
    id: '9',
    name: 'Ed Itorial',
    phone: '+910384935435',
    type: 'INCOMING',
    status: 'ANSWERED',
    mode: 'VOICE',
    count: 0,
    timestamp: Date.now(),
  },
  {
    id: '10',
    name: 'Louise Ville',
    phone: '+910384935435',
    type: 'INCOMING',
    status: 'MISSED',
    mode: 'VOICE',
    count: 0,
    timestamp: Date.now(),
  },
  {
    id: '11',
    name: 'John Kester',
    phone: '+910384935435',
    image: 'https://placekitten.com/60',
    type: 'OUTGOING',
    status: 'ANSWERED',
    mode: 'VOICE',
    count: 0,
    timestamp: Date.now(),
  },
  {
    id: '12',
    name: 'Petey Cruiser',
    phone: '+910384935435',
    type: 'OUTGOING',
    status: 'MISSED',
    mode: 'VOICE',
    count: 0,
    timestamp: Date.now(),
  },
  {
    id: '13',
    name: 'Bob Frapples',
    phone: '+910384935435',
    type: 'INCOMING',
    status: 'ANSWERED',
    mode: 'VOICE',
    count: 0,
    timestamp: Date.now(),
  },
  {
    id: '14',
    phone: '+12023304939',
    image: 'https://placekitten.com/60',
    type: 'INCOMING',
    status: 'MISSED',
    mode: 'VOICE',
    count: 0,
    timestamp: Date.now(),
  },
  {
    id: '15',
    name: 'Zack Lee',
    phone: '+910384935435',
    type: 'OUTGOING',
    status: 'ANSWERED',
    mode: 'VOICE',
    count: 0,
    timestamp: Date.now(),
  },
  {
    id: '16',
    name: 'Kerry Oaky',
    phone: '+910384935435',
    image: 'https://placekitten.com/60',
    type: 'OUTGOING',
    status: 'MISSED',
    mode: 'VIDEO',
    count: 0,
    timestamp: Date.now(),
  },
  {
    id: '17',
    name: 'Kerry Oaky',
    phone: '+910384935435',
    type: 'INCOMING',
    status: 'ANSWERED',
    mode: 'VOICE',
    count: 0,
    timestamp: Date.now(),
  },
  {
    id: '18',
    name: 'Marcus Down',
    phone: '+910384935435',
    image: 'https://placekitten.com/60',
    type: 'INCOMING',
    mode: 'VOICE',
    count: 0,
    status: 'MISSED',
    timestamp: Date.now(),
  },
  {
    id: '19',
    name: 'Ed Itorial',
    phone: '+910384935435',
    type: 'OUTGOING',
    status: 'ANSWERED',
    mode: 'VOICE',
    count: 0,
    timestamp: Date.now(),
  },
  {
    id: '20',
    name: 'Louise Ville',
    phone: '+910384935435',
    type: 'OUTGOING',
    status: 'MISSED',
    timestamp: Date.now(),
    mode: 'VIDEO',
    count: 0,
  },
];

const RecentTab: React.FC<RecentTabProps> = () => {
  const dispatch = useDispatch();

  const [contacts, setContacts] = React.useState<Recent[]>(recents);

  const fetchCallLogs = async () => {};

  const handleStartVoiceCall = (phone: string) => {
    const user = contacts.find(c => c.phone === phone);
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

  const handleDeleteRecent = (phone: string) => {
    setContacts(contacts.filter(c => c.phone !== phone));
  };

  React.useEffect(() => {
    fetchCallLogs();
  });

  return (
    <>
      <UI.Layout noScroll style={{paddingHorizontal: 0}}>
        <FlatList
          ListHeaderComponent={<UI.Spacer />}
          ListFooterComponent={<UI.Spacer size={30} />}
          data={contacts.sort((a, b) => a.timestamp - b.timestamp)}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <RecentItem
              onVoiceCall={handleStartVoiceCall}
              onVideoCall={handleStartVideoCall}
              onDelete={handleDeleteRecent}
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
      </UI.Layout>
    </>
  );
};

export default RecentTab;
