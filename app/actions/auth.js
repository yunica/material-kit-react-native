import { FETCHING_USER_CLEAN, FETCHING_USER_SET } from '../constants/actions';

export const setUser = (data) => {
  return { type: FETCHING_USER_SET, data };
};

export const clearUser = () => {
  return { type: FETCHING_USER_CLEAN };
};

export const fetchUser = (data) => {
  return (dispatch) => {
    return dispatch(setUser(data));
  };
};
