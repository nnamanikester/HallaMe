import * as React from 'react';
import {
  StatusBar,
  StatusBarProps,
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native';

interface AppStatusBarProps extends StatusBarProps {}

const AppStatusBar: React.FC<AppStatusBarProps> = (
  props: AppStatusBarProps,
) => {
  return (
    <View style={[styles.statusBar, {backgroundColor: props.backgroundColor}]}>
      <SafeAreaView>
        <StatusBar
          translucent
          backgroundColor={props.backgroundColor}
          {...props}
        />
      </SafeAreaView>
    </View>
  );
};

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default AppStatusBar;
