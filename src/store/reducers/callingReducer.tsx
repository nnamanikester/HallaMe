import {
  callingActionsType,
  callingType,
  SET_CALLING,
  SET_CALL_TYPE,
  SET_SHOW_SCREEN,
} from '../types';

const INITIAL_STATE: callingType = {
  showScreen: false,
};

export default (state = INITIAL_STATE, action: callingActionsType) => {
  switch (action.type) {
    case SET_CALLING:
      return action.payload;
    case SET_CALL_TYPE:
      return {...state, type: action.payload};
    case SET_SHOW_SCREEN:
      return {...state, type: action.payload};
    default:
      return state;
  }
};
