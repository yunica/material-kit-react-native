import { combineReducers } from 'redux';
// import tabBarReducer from './tabBar.reducer'
import dataReducer from './data';
import uiReducer from './ui';
import authReducer from './auth';

export default combineReducers({
  // tabId: tabBarReducer,
  data: dataReducer,
  ui: uiReducer,
  auth: authReducer
});
