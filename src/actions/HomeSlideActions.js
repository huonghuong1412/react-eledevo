import * as types from '../constant'
export function getListSlide(payload){
    return({
        type: types.GET_SLIDE_REQUEST,
        payload
    })
}
export function addListSlide(payload){
    return({
        type: types.ADD_SLIDE_REQUEST,
        payload
    })
}
export function editListSlide(payload){
    return({
        type: types.EDIT_SLIDE_REQUEST,
        payload
    })
}
export function deleteListSlide(payload){
    return({
        type: types.DELETE_SLIDE_REQUEST,
        payload
    })
}
export function searchListSlide(payload){
    return({
        type: types.SEARCH_SLIDE_REQUEST,
        payload
    })
}