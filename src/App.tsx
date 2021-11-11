import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import NavigationFlow from '@/navigation';
import {ThemeProvider} from '@/contexts/ThemeContext';
import {ToastProvider} from 'react-native-toast-notifications';
import {store} from './store';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider>
          <ToastProvider>
            <NavigationFlow />
          </ToastProvider>
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
