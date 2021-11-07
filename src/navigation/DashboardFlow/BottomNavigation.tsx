import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@/contexts/ThemeContext';
import HomeScreen from '@/screens/MainScreens/HomeScreen';
import SVG from '@/components/SVG';
import * as UI from '@/components/common';
import styles from './styles';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';
import {Platform} from 'react-native';
import {color} from 'react-native-reanimated';
import MessagesScreen from '@/screens/MainScreens/MessagesScreen';
import ProfileScreen from '@/screens/MainScreens/ProfileScreen';

const isIOS = Platform.OS === 'ios';

const Tab = createBottomTabNavigator();

export interface BottomNavigationProps {}

const BottomNavigation: React.FC<BottomNavigationProps> = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.gray4,
          elevation: 0,
          borderTopWidth: 0,
          height: isIOS ? hd('9%') : hd('7%'),
        },
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarTestID: 'home_tab_navigation',
          unmountOnBlur: false,
          tabBarIcon: ({focused}) => (
            <UI.Block
              style={[
                styles.tab,
                // focused && {...styles.tabActive, borderColor: colors.primary},
              ]}>
              <UI.Icon
                name="ios-call-outline"
                color={focused ? colors.primary : colors.gray2}
              />
            </UI.Block>
          ),
        }}
      />
      <Tab.Screen
        name="MessagesTab"
        component={MessagesScreen}
        options={{
          tabBarTestID: 'messages_tab_navigation',
          unmountOnBlur: false,
          tabBarIcon: ({focused}) => (
            <UI.Block
              style={[
                styles.tab,
                // focused && {...styles.tabActive, borderColor: colors.secondary},
              ]}>
              <UI.Icon
                name="ios-chatbubble-ellipses-outline"
                color={focused ? colors.primary : colors.gray2}
              />
            </UI.Block>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarTestID: 'profile_tab_navigation',
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <UI.Block
              style={[
                styles.tab,
                // focused && {...styles.tabActive, borderColor: colors.primary},
              ]}>
              <UI.Icon
                name="ios-person-circle-outline"
                color={focused ? colors.primary : colors.gray2}
              />
            </UI.Block>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
