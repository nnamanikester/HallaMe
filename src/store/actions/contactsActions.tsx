import {contactType, SET_CONTACTS} from '../types';

export const setContacts = (payload: contactType[]) => {
  return {
    type: SET_CONTACTS,
    payload,
  };
};
