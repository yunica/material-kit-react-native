import { createStore, applyMiddleware } from 'redux';
import Reducers from './reducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';

const configureStore =() => createStore(Reducers, applyMiddleware(thunk, createLogger))
export default configureStore;
