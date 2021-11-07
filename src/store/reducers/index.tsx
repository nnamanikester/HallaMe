import {combineReducers} from 'redux';
import {AppSettingsType, callingType, UserType} from '../types';
import user from './userReducer';
import appSettings from './appSettingsReducer';
import calling from './callingReducer';

export interface IRootState {
  user: UserType;
  appSettings: AppSettingsType;
  calling: callingType;
}

export default combineReducers<IRootState>({
  user,
  appSettings,
  calling,
});
