import * as types from '../constant'
export function getListFeedback(payload){
    return({
        type: types.GET_FEEDBACK_REQUEST,
        payload
    })
}
export function addListFeedback(payload){
    return({
        type: types.ADD_FEEDBACK_REQUEST,
        payload
    })
}
export function editListFeedback(payload){
    return({
        type: types.EDIT_FEEDBACK_REQUEST,
        payload
    })
}
export function deleteListFeedback(payload){
    return({
        type: types.DELETE_FEEDBACK_REQUEST,
        payload
    })
}
export function searchListFeedback(payload){
    return({
        type: types.SEARCH_FEEDBACK_REQUEST,
        payload
    })
}