import { FETCHING_DATA, FETCHING_DATA_FAILURE, FETCHING_PROMOTIONS } from '../constants/actions';

const initialState = {
  promotions: [],
  isFeching: false
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        isFeching: true
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        promotions: [],
        isFeching: false
      };
    case FETCHING_PROMOTIONS:
      return {
        ...state,
        promotions: action.data,
        isFeching: false
      };

    default:
      return state;
  }
};
export default dataReducer;
