import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const _staticBackground = (
  logoOpacity: any,
  backgroundColor: string,
) => [logoOpacity, StyleSheet.absoluteFill, {backgroundColor: backgroundColor}];

export const _dynamicImageBackground = (
  imageScale: any,
  logoOpacity: any,
  backgroundColor: string,
) => [
  imageScale,
  logoOpacity,
  {
    ...StyleSheet.absoluteFillObject,
    width,
    height,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    tintColor: backgroundColor || null,
  },
];

export const _dynamicLogoStyle = (
  logoScale: any,
  logoOpacity: any,
  logoWidth: any,
  logoHeight: any,
) => [
  logoScale,
  logoOpacity,
  {
    width: logoWidth || 150,
    height: logoHeight || 150,
  },
];

export const _dynamicCustomComponentStyle = (
  logoScale: any,
  logoOpacity: any,
) => [
  logoScale,
  logoOpacity,
  {
    // width: logoWidth || 150,
    // height: logoHeight || 150,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
];

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerGlue: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
  logoStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
