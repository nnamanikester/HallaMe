import {StyleSheet, Platform} from 'react-native';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';

const isIOS = Platform.OS === 'ios';

export default StyleSheet.create({
  container: {
    borderRadius: 100,
    width: wd('15%'),
    height: wd('15%'),
    position: 'absolute',
    bottom: hd('4%'),
    right: wd('8%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
