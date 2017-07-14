/* global window */

import { combineReducers, createStore } from 'redux';
import todoListApp from './reducers';

const reducers = combineReducers({
  todoListApp,
});

/* eslint-disable no-underscore-dangle */
export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
