import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { sagas as peerSagas } from './peer';
import { sagas as setupKeySagas } from './setup-key';
import { sagas as userSagas } from './user';
import { sagas as ruleSagas } from './rule';
import { sagas as groupSagas } from './group';

import rootReducer from './root-reducer';
import { apiClient } from '../services/api-client';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(peerSagas);
sagaMiddleware.run(setupKeySagas);
sagaMiddleware.run(userSagas);
sagaMiddleware.run(ruleSagas);
sagaMiddleware.run(groupSagas);

export { apiClient, rootReducer, store };