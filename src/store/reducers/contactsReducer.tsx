import {contactsActionsType, contactType, SET_CONTACTS} from '../types';

const INITIAL_STATE: contactType[] = [];

export default (state = INITIAL_STATE, action: contactsActionsType) => {
  switch (action.type) {
    case SET_CONTACTS:
      return action.payload;
    default:
      return state;
  }
};
