import {Platform, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  keypadContainer: {
    position: 'absolute',
    bottom: 0,
    paddingTop: wd('5%'),
    paddingBottom: Platform.OS === 'ios' ? wd('8%') : wd('5%'),
    paddingHorizontal: wd('10%'),
    borderTopEndRadius: wd('5%'),
    borderTopLeftRadius: wd('5%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  key: {
    borderWidth: 1,
    borderRadius: 100,
    height: hd('8%'),
    width: hd('8%'),
  },
});
