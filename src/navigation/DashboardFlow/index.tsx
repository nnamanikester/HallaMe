import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import BottomNavigation from './BottomNavigation';
import HomeScreen from '@/screens/MainScreens/HomeScreen';
import ConversationScreen from '@/screens/MainScreens/ConversationScreen';
import ProfileScreen from '@/screens/MainScreens/ProfileScreen';

const Stack = createNativeStackNavigator();

export interface DashboardFlowProps {}

const DashboardFlow: React.FC<DashboardFlowProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Conversation" component={ConversationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default DashboardFlow;
