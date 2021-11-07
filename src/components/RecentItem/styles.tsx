import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  contactImage: {
    width: hd('4.5%'),
    height: hd('4.5%'),
    borderRadius: hd('4.5%'),
  },
  actionButton: {
    height: hd('4.5%'),
    width: hd('4.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1.5,
  },
  contactContainer: {
    marginBottom: hd('2%'),
    paddingHorizontal: wd('4%'),
  },
  callType: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
