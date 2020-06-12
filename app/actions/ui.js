import { HIDDE_TOAST, SHOW_TOAST } from '../constants/actions';

export const showToast = (data) => {
  return { type: SHOW_TOAST, data };
};

export const hiddeToast = () => {
  return { type: HIDDE_TOAST };
};

export const toastMessage = (data) => {
  return (dispatch) => {
    return dispatch(showToast(data));
  };
};

export const toastHidde = () => {
  return (dispatch) => {
    return dispatch(hiddeToast());
  };
};
