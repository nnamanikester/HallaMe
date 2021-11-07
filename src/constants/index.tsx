export interface ColorsState {
  background: string;
  primary: string;
  secondary: string;
  black: string;
  white: string;
  text: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  danger: string;
  transparent: string;
}

// Light theme colors
export const LIGHT_COLORS: ColorsState = {
  background: '#FFFFFF',
  primary: '#1b74d8',
  secondary: '#09cc71',
  black: '#0e0e0e',
  white: '#FFFFFF',
  text: '#4f4f4f',
  gray1: '#919191',
  gray2: '#b7b7b7',
  gray3: '#d8d8d8',
  gray4: '#f6f6f6',
  danger: '#eb2f2e',
  transparent: 'rgba(255, 255, 255, 0.24)',
};

// Dark theme colors
export const DARK_COLORS: ColorsState = {
  background: '#FFFFFF',
  primary: '#09cc71',
  secondary: '#1b74d8',
  black: '#0e0e0e',
  white: '#FFFFFF',
  text: '#4f4f4f',
  gray1: '#919191',
  gray2: '#b7b7b7',
  gray3: '#d8d8d8',
  gray4: '#f6f6f6',
  danger: '#eb2f2e',
  transparent: 'rgba(255, 255, 255, 0.24)',
};

export const API_URL: string = 'https://rodicash.herokuapp.com/api/v1';

// ASYNC STORAGE CONSTANTS
export const USER_STORAGE = '@holame/USER';
export const APP_SETTINGS_STORAGE = '@holame/AppSettings';

// KEYCHAIN SERVICE CONSTANTS
export const RODICASH_LOGIN = '@holame/login';
