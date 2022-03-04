import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {
    persistStore,
    persistCombineReducers,
  } from 'redux-persist';
import {createLogger} from 'redux-logger';
import reducers from './reducers'
import sagas from './sagas'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    debug: true,
    whitelist: ['auth'] 
};

const persistedReducers = persistCombineReducers(persistConfig, reducers);

// define middlewares
let middlewares = [];

// create and add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// const sagaMiddleware = createSagaMiddleware()
// const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware))

//add the freeze and logger dev middleware
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
}

let store = createStore(persistedReducers, undefined, applyMiddleware(...middlewares));
let persistor = persistStore(store);
sagaMiddleware.run(sagas);

// const store = createStore(reducers, composedEnhancer)
// sagaMiddleware.run(sagas)

export {
    store, persistor
}