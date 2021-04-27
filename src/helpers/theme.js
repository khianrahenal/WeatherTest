import {Dimensions, PixelRatio} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const FONTS = {
  robotoBlack: {fontFamily: 'Roboto-Black'},
  robotoBold: {fontFamily: 'Roboto-Bold'},
  robotoMedium: {fontFamily: 'Roboto-Medium'},
  robotoLight: {fontFamily: 'Roboto-Light'},
  robotoRegular: {fontFamily: 'Roboto-Regular'},
};

export const wp = x => {
  const widthPercent = x;
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

export const hp = y => {
  const heightPercent = y;
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export const color = {
  black: '#000000',
  white: '#ffffff',
  green: '#00804A',
};

export default {FONTS, wp, hp, color};
