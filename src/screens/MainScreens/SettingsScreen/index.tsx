import React from 'react';
import * as UI from '@/components/common';
import AppStatusBar from '@/components/AppStatusBar';
import {useTheme} from '@/contexts/ThemeContext';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';
import {Switch} from 'react-native';
import styles from './styles';
import {formatPhone} from '@/utils';

interface SettingsScreenProps {
  navigation: any;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({navigation}) => {
  const {colors} = useTheme();

  const [dnd, setDnd] = React.useState(false);
  const [annonymous, setAnnonymous] = React.useState(false);
  const [screenCalls, setScreenCalls] = React.useState(true);

  return (
    <>
      <AppStatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      />

      <UI.Block
        backgroundColor={colors.background}
        style={{paddingHorizontal: wd('4%')}}>
        <UI.Block row>
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon name="arrow-back" />
          </UI.Clickable>
          <UI.Spacer />
          <UI.Text h1>Settings</UI.Text>
        </UI.Block>
      </UI.Block>
      <UI.Layout>
        <UI.Spacer medium />

        <UI.Block>
          <UI.Text note>ACCOUNT</UI.Text>
          <UI.Spacer />

          <UI.Clickable>
            <UI.Block>
              <UI.Text body>{formatPhone('+234810158483')}</UI.Text>
              <UI.Text note>HallaMe phone number</UI.Text>
            </UI.Block>
          </UI.Clickable>

          <UI.Spacer medium />

          <UI.Clickable>
            <UI.Block row justify="space-between" center>
              <UI.Block width="85%">
                <UI.Text body>Profile</UI.Text>
                <UI.Text note>Your public profile details.</UI.Text>
              </UI.Block>
              <UI.Icon size={20} name="chevron-forward" />
            </UI.Block>
          </UI.Clickable>

          <UI.Spacer medium />
        </UI.Block>

        <UI.Block style={[styles.divider, {borderColor: colors.gray4}]} />

        <UI.Block>
          <UI.Spacer />
          <UI.Text note>DO NOT DISTURB</UI.Text>
          <UI.Spacer />

          <UI.Block row justify="space-between" center>
            <UI.Block width="85%">
              <UI.Text body>Do not disturb</UI.Text>
              <UI.Text note>Send do not dissturb to voicemail.</UI.Text>
            </UI.Block>
            <Switch value={dnd} onValueChange={setDnd} />
          </UI.Block>

          <UI.Spacer medium />
        </UI.Block>

        <UI.Block style={[styles.divider, {borderColor: colors.gray4}]} />

        <UI.Block>
          <UI.Spacer />
          <UI.Text note>CALLS</UI.Text>
          <UI.Spacer />

          <UI.Block row justify="space-between" center>
            <UI.Block width="85%">
              <UI.Text body>Making and receiving calls</UI.Text>
              <UI.Text note>Prefer Wi-Fi and mobile data</UI.Text>
            </UI.Block>
            <UI.Icon name="chevron-forward" size={20} />
          </UI.Block>

          <UI.Spacer medium />

          <UI.Block row justify="space-between" center>
            <UI.Block width="85%">
              <UI.Text body>Annonymous caller ID</UI.Text>
              <UI.Text note>Hide youro caller ID on outgoing calls.</UI.Text>
            </UI.Block>
            <Switch value={annonymous} onValueChange={setAnnonymous} />
          </UI.Block>

          <UI.Spacer medium />

          <UI.Block row justify="space-between" center>
            <UI.Block width="85%">
              <UI.Text body>Screen calls</UI.Text>
              <UI.Text note>Hear a caller's name when you pickk up</UI.Text>
            </UI.Block>
            <Switch value={screenCalls} onValueChange={setScreenCalls} />
          </UI.Block>

          <UI.Spacer medium />

          <UI.Block row justify="space-between" center>
            <UI.Block width="85%">
              <UI.Text body>Clear call history</UI.Text>
              <UI.Text note>
                Clear all call history from your account, incliuding archived
                and spam
              </UI.Text>
            </UI.Block>
            <UI.Clickable>
              <UI.Text bold color={colors.danger}>
                Clear
              </UI.Text>
            </UI.Clickable>
          </UI.Block>

          <UI.Spacer medium />
        </UI.Block>

        <UI.Block style={[styles.divider, {borderColor: colors.gray4}]} />

        <UI.Block>
          <UI.Spacer />
          <UI.Text note>MESSAGES</UI.Text>
          <UI.Spacer />

          <UI.Block row justify="space-between" center>
            <UI.Block width="85%">
              <UI.Text body>Do not disturb</UI.Text>
              <UI.Text note>Send do not dissturb to voicemail</UI.Text>
            </UI.Block>
            <Switch value={true} />
          </UI.Block>

          <UI.Spacer medium />

          <UI.Block row justify="space-between" center>
            <UI.Block width="85%">
              <UI.Text body>Do not disturb</UI.Text>
              <UI.Text note>Send do not dissturb to voicemail</UI.Text>
            </UI.Block>
            <Switch value={true} />
          </UI.Block>

          <UI.Spacer medium />
        </UI.Block>

        <UI.Block style={[styles.divider, {borderColor: colors.gray4}]} />

        <UI.Block>
          <UI.Spacer />
          <UI.Text note>VOICEMAIL</UI.Text>
          <UI.Spacer />

          <UI.Clickable>
            <UI.Block row justify="space-between" center>
              <UI.Block width="85%">
                <UI.Text body>Voicemail greeting</UI.Text>
                <UI.Text note>HallaMe default</UI.Text>
              </UI.Block>
              <UI.Icon name="chevron-forward" size={20} />
            </UI.Block>
          </UI.Clickable>

          <UI.Spacer medium />
        </UI.Block>

        <UI.Block style={[styles.divider, {borderColor: colors.gray4}]} />

        <UI.Block>
          <UI.Spacer />
          <UI.Text note>NOTIFICATIONS</UI.Text>
          <UI.Spacer />

          <UI.Clickable>
            <UI.Text body>Incoming calls notifications</UI.Text>
            <UI.Text note>HallaMe default</UI.Text>
          </UI.Clickable>

          <UI.Spacer medium />

          <UI.Clickable>
            <UI.Text body>Missed calls notifications</UI.Text>
            <UI.Text note>Send do not disturb to voicemail</UI.Text>
          </UI.Clickable>

          <UI.Spacer medium />

          <UI.Clickable>
            <UI.Text body>Video calls notifications</UI.Text>
            <UI.Text note>Send do not disturb to voicemail</UI.Text>
          </UI.Clickable>

          <UI.Spacer medium />

          <UI.Clickable>
            <UI.Text body>Message notifications</UI.Text>
            <UI.Text note>Send do not disturb to voicemail</UI.Text>
          </UI.Clickable>

          <UI.Spacer medium />

          <UI.Clickable>
            <UI.Text body>Voicemail notifications</UI.Text>
            <UI.Text note>Send do not disturb to voicemail</UI.Text>
          </UI.Clickable>

          <UI.Spacer medium />
        </UI.Block>

        <UI.Spacer large />
      </UI.Layout>
    </>
  );
};

export default SettingsScreen;
