import { FETCHING_USER, FETCHING_USER_FAILURE, FETCHING_USER_SET } from '../constants/actions';

export const setUser = (data) => {
  return { type: FETCHING_USER_SET, data };
};

export const hiddeToast = () => {
  return { type: FETCHING_USER };
};

export const fetchUser = (data) => {
  return (dispatch) => {
    return dispatch(setUser(data));
  };
};
