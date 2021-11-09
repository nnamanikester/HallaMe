import {Platform, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';

const isIOS = Platform.OS === 'ios';

export default StyleSheet.create({
  backgroundImage: {
    width: wd('100%'),
    height: hd('100%'),
    position: 'absolute',
  },
  overlay: {
    width: wd('100%'),
    height: hd('100%'),
    position: 'absolute',
    opacity: 0.5,
    top: 0,
  },
  header: {
    marginTop: isIOS ? hd('5%') : hd('2%'),
    paddingRight: wd('4%'),
  },
  container: {
    // zIndex: 9,
  },
  avatar: {
    width: wd('30%'),
    height: wd('30%'),
    borderRadius: 100,
  },
  avatarContainer: {
    borderWidth: 2,
    borderRadius: 100,
  },
  buttonContainer: {
    paddingHorizontal: wd('15%'),
  },
  button: {
    width: wd('12%'),
    height: wd('12%'),
    borderRadius: 100,
  },
});
