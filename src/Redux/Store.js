

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './RootReducer';

const middleware = [thunk];

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
