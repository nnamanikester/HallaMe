import {Platform, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  keypadContainer: {
    position: 'absolute',
    bottom: 0,
    height: hd('45%'),
    paddingTop: wd('5%'),
    paddingBottom: Platform.OS === 'ios' ? wd('8%') : wd('5%'),
    paddingHorizontal: wd('10%'),
    borderTopEndRadius: wd('5%'),
    borderTopLeftRadius: wd('5%'),
  },
  key: {
    borderWidth: 1,
    borderRadius: 100,
    height: hd('6%'),
    width: hd('6%'),
  },
});
