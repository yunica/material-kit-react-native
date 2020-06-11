import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, 
    FETCHING_PROMOTIONS } from '../constants/actions'

const initialState = {
    promotions: [],
    isFeching: false,
    error: '',
}

export default dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                isFeching: true,
                error: ''
            }
        case FETCHING_DATA_FAILURE:
                return {
                    ...state,
                    isFeching: false,
                    error: action.data
                }
        case FETCHING_PROMOTIONS:
            return {
                ...state,
                promotions: action.data,
                isFeching: false
            }

        default:
            return state
    }
}