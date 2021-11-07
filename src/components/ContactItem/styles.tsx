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
  contactContainer: {
    marginBottom: hd('2%'),
    paddingHorizontal: wd('4%'),
  },
});
