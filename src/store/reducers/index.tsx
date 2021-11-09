import {combineReducers} from 'redux';
import {AppSettingsType, callingType, contactType, UserType} from '../types';
import user from './userReducer';
import appSettings from './appSettingsReducer';
import calling from './callingReducer';
import contacts from './contactsReducer';

export interface IRootState {
  user: UserType;
  appSettings: AppSettingsType;
  calling: callingType;
  contacts: contactType[];
}

export default combineReducers<IRootState>({
  user,
  appSettings,
  calling,
  contacts,
});
