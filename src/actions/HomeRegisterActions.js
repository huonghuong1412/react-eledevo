import * as types from '../constant'
export function getListRegister(payload){
    return({
        type: types.GET_REGISTER_REQUEST,
        payload
    })
}
export function addListRegister(payload){
    return({
        type: types.ADD_REGISTER_REQUEST,
        payload
    })
}
export function editListRegister(payload){
    return({
        type: types.EDIT_REGISTER_REQUEST,
        payload
    })
}
export function deleteListRegister(payload){
    return({
        type: types.DELETE_REGISTER_REQUEST,
        payload
    })
}
export function searchListRegister(payload){
    return({
        type: types.SEARCH_REGISTER_REQUEST,
        payload
    })
}