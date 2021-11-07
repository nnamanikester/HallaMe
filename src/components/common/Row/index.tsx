import React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';

export interface RowProps extends ViewProps {
  style?: any;
}

const Row: React.FC<RowProps> = ({children, style}) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
  });

  return <View style={{...styles.container, ...style}}>{children}</View>;
};

export {Row};
