import * as React from 'react';
import {useTheme} from '@/contexts/ThemeContext';
import * as UI from '@/components/common';
import AppStatusBar from '@/components/AppStatusBar';
import OptionsMenu from '@/components/OptionMenu';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ContactsTab from './ContactsTab';
import RecentTab from './RecentTab';
import MessagesTab from './MessagesTab';
import VoiceMailTab from './VoiceMailTab';

const TopTab = createMaterialTopTabNavigator();

interface HomeScreenProps {
  navigation: any;
}

const TopNavigation = () => {
  const {colors} = useTheme();

  return (
    <TopTab.Navigator
      initialRouteName="Recent"
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: colors.secondary,
        },
        tabBarItemStyle: {
          flexDirection: 'row',
        },
      }}>
      <TopTab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <UI.Text color={focused ? colors.text : colors.gray2}>
              Recent
            </UI.Text>
          ),
        }}
        name="Recent"
        component={RecentTab}
      />
      <TopTab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <UI.Text color={focused ? colors.text : colors.gray2}>
              Contacts
            </UI.Text>
          ),
        }}
        name="Contacts"
        component={ContactsTab}
      />
      <TopTab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <UI.Text color={focused ? colors.text : colors.gray2}>
              Messages
            </UI.Text>
          ),
        }}
        name="Messages"
        component={MessagesTab}
      />
      <TopTab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <UI.Icon
              size={20}
              color={focused ? colors.secondary : colors.gray2}
              name="ios-recording-outline"
            />
          ),
        }}
        name="VoiceMail"
        component={VoiceMailTab}
      />
    </TopTab.Navigator>
  );
};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {colors} = useTheme();
  const [showSearch, setShowSearch] = React.useState(false);

  return (
    <>
      <AppStatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <UI.Block
        backgroundColor={colors.primary}
        style={{paddingHorizontal: wd('4%')}}>
        <UI.Spacer />
        {!showSearch ? (
          <UI.Block row center justify="space-between">
            <UI.Text h3 color={colors.white}>
              HallaMe
            </UI.Text>

            <UI.Block width="auto" row>
              <UI.Clickable onClick={() => setShowSearch(true)}>
                <UI.Icon
                  color={colors.white}
                  size={hd('2.5%')}
                  name="ios-search"
                />
              </UI.Clickable>

              <UI.Spacer />

              <UI.Clickable onClick={() => {}}>
                <UI.Icon
                  color={colors.white}
                  size={hd('2.5%')}
                  name="ios-person-circle-outline"
                />
              </UI.Clickable>

              <UI.Spacer />

              <OptionsMenu
                customButton={
                  <UI.Icon
                    color={colors.white}
                    size={hd('2.5%')}
                    name="ios-ellipsis-vertical"
                  />
                }
                options={['Settings', 'Help', 'Cancel']}
                actions={[() => {}, () => {}]}
              />
            </UI.Block>
          </UI.Block>
        ) : (
          <UI.Block row center justify="space-between">
            <UI.Block width="93%">
              <UI.TextInput
                autoFocus
                placeholder="Search here"
                iconRight={
                  <UI.Icon size={20} name="search" color={colors.gray2} />
                }
              />
            </UI.Block>
            <UI.Clickable onClick={() => setShowSearch(false)}>
              <UI.Icon
                color={colors.white}
                size={hd('2.5%')}
                name="ios-close-circle"
              />
            </UI.Clickable>
          </UI.Block>
        )}
        <UI.Spacer />
      </UI.Block>

      <TopNavigation />
    </>
  );
};

export default HomeScreen;
