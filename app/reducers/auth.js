import { FETCHING_USER, FETCHING_USER_FAILURE, FETCHING_USER_SET } from '../constants/actions';

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

    default:
      return state;
  }
};
export default dataReducer;
