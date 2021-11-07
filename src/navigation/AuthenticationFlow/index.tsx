import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '@/screens/AuthenticationScreens/OnboardingScreen';

const Stack = createNativeStackNavigator();

export interface AuthenticationFlowProps {}

const AuthenticationFlow: React.FC<AuthenticationFlowProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticationFlow;
