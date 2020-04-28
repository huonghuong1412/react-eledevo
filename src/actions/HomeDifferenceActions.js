import * as types from '../constant'
export function getListDifference(payload){
    return({
        type: types.GET_DIFFERENCE_REQUEST,
        payload
    })
}
export function addListDifference(payload){
    return({
        type: types.ADD_DIFFERENCE_REQUEST,
        payload
    })
}
export function editListDifference(payload){
    return({
        type: types.EDIT_DIFFERENCE_REQUEST,
        payload
    })
}
export function deleteListDifference(payload){
    return({
        type: types.DELETE_DIFFERENCE_REQUEST,
        payload
    })
}
export function searchListDifference(payload){
    return({
        type: types.SEARCH_DIFFERENCE_REQUEST,
        payload
    })
}