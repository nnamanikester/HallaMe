import * as React from 'react';
import * as UI from '@/components/common';
import {FlatList} from 'react-native';
import {VoiceMail} from './types';
import {useDispatch} from 'react-redux';
import {callingType, SET_CALLING} from '@/store/types';
import VoiceMailComp from '@/components/VoiceMail';

interface VoiceMailTabProps {}

const mailList: VoiceMail[] = [
  {
    id: '1',
    name: 'John Kester',
    phone: '+2348101938493',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '2',
    phone: '+910384935435',
    image: 'https://placekitten.com/60',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '3',
    name: 'Bob Frapples',
    phone: '+12458384890',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '4',
    name: 'Maya Didas',
    phone: '+12023304939',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '5',
    name: 'Zack Lee',
    phone: '+12023304939',
    image: 'https://placekitten.com/60',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '6',
    name: 'Kerry Oaky',
    phone: '+12023304939',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '7',
    phone: '+12023304939',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '8',
    phone: '+12023304939',
    image: 'https://placekitten.com/60',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '9',
    name: 'Ed Itorial',
    phone: '+12023304939',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '10',
    name: 'Louise Ville',
    phone: '+12023304939',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '11',
    name: 'John Kester',
    phone: '+2348101938493',
    image: 'https://placekitten.com/60',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '12',
    name: 'Petey Cruiser',
    phone: '+910384935435',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '13',
    name: 'Bob Frapples',
    phone: '+12458384890',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '14',
    phone: '+12023304939',
    image: 'https://placekitten.com/60',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '15',
    name: 'Zack Lee',
    phone: '+12023304939',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '16',
    name: 'Kerry Oaky',
    phone: '+12023304939',
    image: 'https://placekitten.com/60',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '17',
    name: 'Kerry Oaky',
    phone: '+12023304939',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '18',
    name: 'Marcus Down',
    phone: '+12023304939',
    image: 'https://placekitten.com/60',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '19',
    name: 'Ed Itorial',
    phone: '+12023304939',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
  {
    id: '20',
    name: 'Louise Ville',
    phone: '+12023304939',
    voiceMessage: 'https://placekitten.com/60',
    duration: 34574,
    timestamp: Date.now(),
  },
];

const VoiceMailTab: React.FC<VoiceMailTabProps> = () => {
  const dispatch = useDispatch();

  const [mails, setMails] = React.useState<VoiceMail[]>(mailList);

  const handleStartVoiceCall = (phone: string) => {
    const user = mails.find(c => c.phone === phone);
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
    const user = mails.find(c => c.phone === phone);
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

  const handleDeleteMesssage = (phone: string) => {
    setMails(mails.filter(c => c.phone !== phone));
  };

  return (
    <>
      <UI.Layout noScroll style={{paddingHorizontal: 0}}>
        <FlatList
          ListHeaderComponent={<UI.Spacer />}
          ListFooterComponent={<UI.Spacer size={30} />}
          data={mails.sort((a, b) => a.timestamp - b.timestamp)}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <VoiceMailComp
              name={item.name}
              image={item.image}
              phone={item.phone}
              voiceMessage={item.voiceMessage}
              duration={item.duration}
              timestamp={item.timestamp}
            />
          )}
        />
      </UI.Layout>
    </>
  );
};

export default VoiceMailTab;
