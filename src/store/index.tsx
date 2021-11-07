import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import reducers from '@/store/reducers';
import {initAppSettings, initUser} from './actions';

const store = createStore(reducers, applyMiddleware(Thunk));

store.dispatch(initUser() as any);
store.dispatch(initAppSettings() as any);

export {store};
