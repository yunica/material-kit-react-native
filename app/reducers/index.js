import { combineReducers } from 'redux';
// import tabBarReducer from './tabBar.reducer'
import dataReducer from './data';
import dataReducerUI from './ui';

export default combineReducers({
  // tabId: tabBarReducer,
  data: dataReducer,
  ui: dataReducerUI
});
