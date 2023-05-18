import { getListingApi } from '../apis/home';

export const GET_LISTING = 'GET_LISTING';
export const GET_LISTING_SUCCESSFULL = 'GET_LISTING_SUCCESSFULL';
export const GET_LISTING_FAILED = 'GET_LISTING_FAILED';

export function getListing() {
    return dispatch => {
        dispatch({
            type: GET_LISTING
        })
        return new Promise((resolve, reject) => {
            getListingApi()
                .then((res) => {
                    dispatch({
                        type: GET_LISTING_SUCCESSFULL,
                        data: res
                    })
                    return resolve(res)
                })
                .catch(err => {
                    dispatch({
                        type: GET_LISTING_FAILED
                    })
                    return reject(err)
                })
        })
    }
}
