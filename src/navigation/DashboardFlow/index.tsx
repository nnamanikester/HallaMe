import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@/screens/MainScreens/HomeScreen';
import ConversationScreen from '@/screens/MainScreens/ConversationScreen';
import ProfileScreen from '@/screens/MainScreens/ProfileScreen';
import DialerScreen from '@/screens/MainScreens/DialerScreen';
import Contacts from 'react-native-contacts';
import {useDispatch} from 'react-redux';
import {contactType, SET_CONTACTS} from '@/store/types';
import {formatContact} from '@/utils';
import SettingsScreen from '@/screens/MainScreens/SettingsScreen';

const Stack = createNativeStackNavigator();

export interface DashboardFlowProps {}

const DashboardFlow: React.FC<DashboardFlowProps> = () => {
  const dispatch = useDispatch();

  const fetchContacts = async () => {
    try {
      const res = await Contacts.getAll();
      const contacts: contactType[] = res.map(formatContact);
      dispatch({type: SET_CONTACTS, payload: contacts});
    } catch (e: any) {
      console.log('Fetch Contacts ================>', e);
    }
  };

  React.useEffect(() => {
    Contacts.checkPermission().then(permission => {
      // Contacts.PERMISSION_AUTHORIZED || Contacts.PERMISSION_UNDEFINED || Contacts.PERMISSION_DENIED
      if (permission === 'undefined') {
        Contacts.requestPermission().then(permission => {
          if (permission === 'authorized') {
            fetchContacts();
          }
        });
      }
      if (permission === 'authorized') {
        fetchContacts();
      }
      if (permission === 'denied') {
        // Show User How To Enable Contacts
        // Settings > [app name] > contacts.
      }
    });
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Conversation" component={ConversationScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{}}>
        <Stack.Screen name="Dialer" component={DialerScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default DashboardFlow;
