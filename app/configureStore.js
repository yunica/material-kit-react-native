import { createStore, applyMiddleware } from 'redux';
import Reducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middleware = [thunk,logger];

export default function configureStore() {
    const store = createStore(Reducer,
        applyMiddleware(...middleware)
    );

    return store;
}
