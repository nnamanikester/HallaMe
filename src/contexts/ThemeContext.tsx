import * as React from 'react';
import {useColorScheme} from 'react-native';
import {LIGHT_COLORS, DARK_COLORS} from '@/constants';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '@/store/reducers';
import {setAppSettings} from '@/store/actions';

// eslint-disable-next-line no-spaced-func
export const ThemeContext = React.createContext<{
  isDark: boolean;
  colors: typeof LIGHT_COLORS;
  setScheme: (scheme: 'light' | 'dark') => void;
}>({
  isDark: false,
  colors: LIGHT_COLORS,
  setScheme: () => {},
});

export const ThemeProvider: React.FC = ({children}) => {
  // Getting the device color theme, this will also work with react-native-web
  const colorScheme = useColorScheme(); // Can be dark | light | no-preference
  const {appSettings} = useSelector((state: IRootState) => state);
  const dispatch = useDispatch();

  /*
   * To enable changing the app theme dynamicly in the app (run-time)
   * we're gonna use useState so we can override the default device theme
   */
  const [isDark, setIsDark] = React.useState(colorScheme === 'dark');

  React.useEffect(() => {
    setIsDark(appSettings.isDark);
  }, []);

  const defaultTheme = {
    isDark,
    // Chaning color schemes according to theme
    colors: isDark ? DARK_COLORS : LIGHT_COLORS,
    // Overrides the isDark value will cause re-render inside the context.
    setScheme: (scheme: typeof colorScheme) => {
      dispatch(setAppSettings({...appSettings, isDark: scheme === 'dark'}));
      setIsDark(scheme === 'dark');
    },
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to get the theme object returns {isDark, colors, setScheme}
export const useTheme = () => React.useContext(ThemeContext);
