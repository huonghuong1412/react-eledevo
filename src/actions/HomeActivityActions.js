import * as types from '../constant'
export function getListActivity(payload){
    return({
        type: types.GET_ACTIVITY_REQUEST,
        payload
    })
}
export function addListActivity(payload){
    return({
        type: types.ADD_ACTIVITY_REQUEST,
        payload
    })
}
export function editListActivity(payload){
    return({
        type: types.EDIT_ACTIVITY_REQUEST,
        payload
    })
}
export function deleteListActivity(payload){
    return({
        type: types.DELETE_ACTIVITY_REQUEST,
        payload
    })
}
export function searchListActivity(payload){
    return({
        type: types.SEARCH_ACTIVITY_REQUEST,
        payload
    })
}