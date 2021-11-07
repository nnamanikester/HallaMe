import EncryptedStorage from 'react-native-encrypted-storage';
import {APP_SETTINGS_STORAGE} from '@/constants';
import {AppSettingsType, SET_APP_SETTINGS} from '../types';

export const setAppSettings = (settings: AppSettingsType) => {
  return async (dispatch: any) => {
    await EncryptedStorage.setItem(
      APP_SETTINGS_STORAGE,
      JSON.stringify(settings),
    );
    return dispatch({type: SET_APP_SETTINGS, payload: settings});
  };
};

export const initAppSettings = () => {
  return async (dispatch: any) => {
    try {
      const settings = await EncryptedStorage.getItem(APP_SETTINGS_STORAGE);

      if (settings) {
        dispatch({
          type: SET_APP_SETTINGS,
          payload: JSON.parse(settings),
        });
      }
    } catch (e: any) {
      console.log('Init APp Settings ==========>  ', e);
    }
  };
};
