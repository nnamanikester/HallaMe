import {USER_STORAGE} from '@/constants';
import {navigate} from '@/services';
import navigationService from '@/services/navigationService';
import EncryptedStorage from 'react-native-encrypted-storage';
import {SET_USER, UserType} from '../types';

export const setUser = (user: UserType) => {
  console.log('From setUser => ', user);
  return async (dispatch: any) => {
    await EncryptedStorage.setItem(USER_STORAGE, JSON.stringify(user));
    return dispatch({
      type: SET_USER,
      payload: user,
    });
  };
};

export const initUser = () => {
  return async (dispatch: any) => {
    const user = await EncryptedStorage.getItem(USER_STORAGE);

    try {
      if (user) {
        dispatch({
          type: SET_USER,
          payload: JSON.parse(user),
        });
      }
    } catch (e) {
      console.log('InitUser Error ===========> ', e);
    }
  };
};
