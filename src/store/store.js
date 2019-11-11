import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import messenger from '../sagas/messenger/reducer';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  messenger,
});

const middlewares = applyMiddleware(sagaMiddleware)

const store = createStore(reducers, middlewares);

sagaMiddleware.run(sagas);

export default store;

