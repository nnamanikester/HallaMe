export const SET_APP_SETTINGS = 'SET_SETTINGS';

export interface AppSettingsType {
  isDark: boolean;
  isBiometrics: boolean;
}

export type setAppSettings = {
  type: typeof SET_APP_SETTINGS;
  payload: AppSettingsType;
};

export type AppSettingsActionsType = setAppSettings;
