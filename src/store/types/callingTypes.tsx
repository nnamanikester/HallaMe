export const SET_CALLING = 'SET_CALLING';
export const SET_CALL_TYPE = 'SET_CALL_TYPE';
export const SET_SHOW_SCREEN = 'SET_SHOW_SCREEN';

export type CALL_TYPE = 'VOICE' | 'VIDEO';

export interface userType {
  phone: string;
  image?: string;
  name?: string;
}

export interface callingType {
  user?: userType;
  type?: 'VOICE' | 'VIDEO';
  showScreen: boolean;
}

export type setCalling = {
  type: typeof SET_CALLING;
  payload: callingType;
};

export type setCallType = {
  type: typeof SET_CALL_TYPE;
  payload: CALL_TYPE;
};

export type setShowScreen = {
  type: typeof SET_SHOW_SCREEN;
  payload: boolean;
};

export type callingActionsType = setCalling | setCallType | setShowScreen;
