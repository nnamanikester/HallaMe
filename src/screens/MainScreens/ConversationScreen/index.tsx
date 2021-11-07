import * as React from 'react';
import * as UI from '@/components/common';
import AppStatusBar from '@/components/AppStatusBar';
import {useTheme} from '@/contexts/ThemeContext';

interface ConversationScreenProps {
  navigation: any;
  route: any;
}

const ConversationScreen: React.FC<ConversationScreenProps> = ({
  navigation,
  route,
}) => {
  const {colors} = useTheme();
  const {phone} = route.params;

  return (
    <>
      <AppStatusBar
        backgroundColor={colors.background}
        barStyle="dark-content"
      />

      <UI.Layout>
        <UI.Text>Conversation Screen with {phone}</UI.Text>
      </UI.Layout>
    </>
  );
};

export default ConversationScreen;
