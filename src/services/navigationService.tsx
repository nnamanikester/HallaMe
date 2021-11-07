import * as React from 'react';

export const navigationRef = React.createRef<any>();

export const navigate = (name: string, params: any = {}) => {
  navigationRef.current?.navigate(name, params);
};

export default {
  navigationRef,
  navigate,
};
