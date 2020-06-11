import axios from 'axios'
import {getData,getDateFailure} from './index'
import { FETCHING_PROMOTIONS } from '../constants/actions';
URL_TEMP = 'https://jsonplaceholder.typicode.com'


export const getPromotions = (data) => {
    return { type: FETCHING_PROMOTIONS, data }
}

export const fetchPromotions = () => {
    return (dispatch) => {
        dispatch(getData())
        axios.get(`${URL_TEMP}/users`)
            .then(({data}) => {
                dispatch(getPromotions(data))
            })
            .catch(error => {
                dispatch(getDateFailure('Ocurrio un error'))
            });
        }
};