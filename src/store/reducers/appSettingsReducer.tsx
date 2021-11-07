import {
  AppSettingsActionsType,
  AppSettingsType,
  SET_APP_SETTINGS,
} from '../types';

const INITIAL_STATE: AppSettingsType = {
  isBiometrics: false,
  isDark: false,
};

export default (state = INITIAL_STATE, action: AppSettingsActionsType) => {
  switch (action.type) {
    case SET_APP_SETTINGS:
      return action.payload;
    default:
      return state;
  }
};
