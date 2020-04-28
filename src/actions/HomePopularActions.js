import * as types from '../constant'
export function getListPopular(payload){
    return({
        type: types.GET_POPULAR_REQUEST,
        payload
    })
}
export function addListPopular(payload){
    return({
        type: types.ADD_POPULAR_REQUEST,
        payload
    })
}
export function editListPopular(payload){
    return({
        type: types.EDIT_POPULAR_REQUEST,
        payload
    })
}
export function deleteListPopular(payload){
    return({
        type: types.DELETE_POPULAR_REQUEST,
        payload
    })
}
export function searchListPopular(payload){
    return({
        type: types.SEARCH_POPULAR_REQUEST,
        payload
    })
}