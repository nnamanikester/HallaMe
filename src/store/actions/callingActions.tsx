import {
  callingType,
  SET_CALLING,
  CALL_TYPE,
  SET_CALL_TYPE,
  SET_SHOW_SCREEN,
} from '../types';

export const setCalling = (payload: callingType) => {
  return {
    type: SET_CALLING,
    payload,
  };
};

export const setCallType = (payload: CALL_TYPE) => {
  return {
    type: SET_CALL_TYPE,
    payload,
  };
};

export const setShowScreen = (payload: boolean) => {
  return {
    type: SET_SHOW_SCREEN,
    payload,
  };
};
