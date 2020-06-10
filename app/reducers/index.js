import { combineReducers } from 'redux';
// import tabBarReducer from './tabBar.reducer'
import dataReducer from './data'

export default combineReducers({
    // tabId: tabBarReducer,
    data: dataReducer
})