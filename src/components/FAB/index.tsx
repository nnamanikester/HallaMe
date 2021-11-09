import {useTheme} from '@/contexts/ThemeContext';
import * as React from 'react';
import * as UI from '../common';
import styles from './styles';

interface FABProps {
  name: string;
  onClick?: () => void;
}

const FAB: React.FC<FABProps> = ({name, onClick}) => {
  const {colors} = useTheme();

  return (
    <>
      <UI.Clickable onClick={onClick}>
        <UI.Block
          center
          middle
          backgroundColor={colors.primary}
          style={styles.container}>
          <UI.Icon name={name} color={colors.white} />
        </UI.Block>
      </UI.Clickable>
    </>
  );
};

export default FAB;
