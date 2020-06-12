import { SHOW_TOAST, HIDDE_TOAST } from '../constants/actions';

const initialState = {
  isToast: false,
  toastMessage: '',
  toastConf: {
    positionIndicator: 'top',
    round: true,
    color: 'error',
    textStyle: {
      color: 'white'
    }
  }
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        isToast: true,
        toastMessage: action.data
      };
    case HIDDE_TOAST:
      return {
        ...state,
        isToast: false,
        toastMessage: ''
      };
    default:
      return state;
  }
};
export default dataReducer;
