/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import createLogger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';

import rootReducer from '../reducers';

const logger = createLogger();
const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(logger),
);

export default configureStore;
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
