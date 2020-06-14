import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Reducer from './reducers';

const middleware = [thunk, logger];

export default function configureStore() {
  const store = createStore(Reducer, applyMiddleware(...middleware));

  return store;
}
