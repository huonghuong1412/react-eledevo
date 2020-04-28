import * as types from '../constant'
export function getListBenefit(payload){
    return({
        type: types.GET_BENEFIT_REQUEST,
        payload
    })
}
export function addListBenefit(payload){
    return({
        type: types.ADD_BENEFIT_REQUEST,
        payload
    })
}
export function editListBenefit(payload){
    return({
        type: types.EDIT_BENEFIT_REQUEST,
        payload
    })
}
export function deleteListBenefit(payload){
    return({
        type: types.DELETE_BENEFIT_REQUEST,
        payload
    })
}
export function searchListBenefit(payload){
    return({
        type: types.SEARCH_BENEFIT_REQUEST,
        payload
    })
}