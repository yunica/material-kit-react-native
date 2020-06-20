import axios from 'axios';
import { getData, getDataFailure } from './index';
import { FETCHING_PROMOTIONS } from '../constants/actions';

import { showToastMessage } from './ui';

const URL_TEMP = process.env.API_URL;

export const getPromotions = (data) => {
  return { type: FETCHING_PROMOTIONS, data };
};

export const fetchPromotions = () => {
  return (dispatch) => {
    dispatch(getData());
    axios
      .get(`${URL_TEMP}/users`)
      .then(({ data }) => {
        dispatch(getPromotions(data));
      })
      .catch(() => {
        dispatch(getDataFailure());
        dispatch(showToastMessage('Ocurrio un error al buscar promosiones'));
      });
  };
};
