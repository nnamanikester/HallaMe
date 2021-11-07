import {Platform, StyleSheet} from 'react-native';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';

const isIOS = Platform.OS === 'ios';

export default StyleSheet.create({
  tab: {
    width: 'auto',
    height: '100%',
    justifyContent: 'center',
  },
  tabActive: {
    borderTopWidth: 3,
  },
});
