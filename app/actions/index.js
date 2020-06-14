import { FETCHING_DATA, FETCHING_DATA_FAILURE } from '../constants/actions';

export const selected_tab = (tabId2) => {
  return { type: 'selected_tab', payload: tabId2 };
};

export const getData = () => {
  return { type: FETCHING_DATA };
};

export const getDateFailure = (data) => {
  return { type: FETCHING_DATA_FAILURE, data };
};
