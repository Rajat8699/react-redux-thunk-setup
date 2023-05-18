import { GET_LISTING, GET_LISTING_FAILED, GET_LISTING_SUCCESSFULL } from "../actions/home"

const initialState = {
    list: [],
    isLoading: false,
}

export default function homeReducer(state = { ...initialState }, action) {
    switch (action.type) {

        case GET_LISTING:
            return { ...state, isLoading: true }

        case GET_LISTING_SUCCESSFULL:
            return { ...state, list: action?.data?.data?.products, isLoading: false }

        case GET_LISTING_FAILED:
            return { ...state, isLoading: false }

        default:
            return state
    }
}