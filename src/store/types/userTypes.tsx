export const SET_USER = 'SET_USER';

export type setUser = {
  type: typeof SET_USER;
  payload: UserType;
};

export interface UserType {
  email: string | null;
  name: string | null;
  phone?: string;
  photo?: string;
  isActive?: boolean;
  isVerified?: boolean;
  username?: string;
  account?: {
    balance: number;
    bvnVerified: boolean;
  };
}

export type UserActionTypes = setUser;
