import { FETCHING_USER_CLEAN, FETCHING_USER_SET } from '../constants/actions';

const initialState = {
  user: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_USER_SET:
      return {
        ...state,
        user: action.data
      };
    case FETCHING_USER_CLEAN:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};
export default dataReducer;
