import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import Reducer from '../Reducers';
import rootSaga from '../Sagas';
import DefaultState from '../Reducers/Default';
import {cloneDeep} from 'lodash';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const rootReducer = (state, action) => {
  return Reducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

const index = configureStore();
const persistor = persistStore(index);

module.exports = {
  store: index,
  persistor,
};
