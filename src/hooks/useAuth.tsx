import * as React from 'react';
import axios from 'axios';
import {API_URL} from '@/constants';

type registrationType = {
  name: string;
  email: string;
  password: string;
  phone: string;
  referralCode?: string;
};

type loginType = {
  email: string;
  password: string;
};

// Data that needs to be passed to the @handle auth function
type authDataType = registrationType | loginType;

// Type of data expected to be returned from the useAuth hook
type hookReturnType = (
  type: 'register' | 'login',
) => [(options: authDataType) => void, boolean, any, any];

export const useAuth: hookReturnType = (type: 'register' | 'login') => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>(null);
  const [error, setError] = React.useState<any>(null);

  const handleAuth = (options: authDataType): void => {
    setError(null);
    if (type === 'register') {
      handleRegister(options as any);
    } else if (type === 'login') {
      handleLogin(options as any);
    }
  };

  const handleLogin = async (options: loginType): Promise<void> => {
    setIsLoading(true);
    try {
      const res: any = await axios.post(API_URL + '/auth/login', options);
      setData(res.data.data);
      setIsLoading(false);
    } catch (e: any) {
      setError(e.response.data);
      setIsLoading(false);
    }
  };

  const handleRegister = async (options: registrationType): Promise<void> => {
    setIsLoading(true);
    try {
      const res: any = await axios.post(API_URL + '/auth/register', options);
      setData(res.data.data);
      setIsLoading(false);
    } catch (e: any) {
      setError(e.response.data);
      setIsLoading(false);
    }
  };

  return [handleAuth, isLoading, data, error];
};
