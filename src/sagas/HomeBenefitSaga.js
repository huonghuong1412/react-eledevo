import { put, takeEvery } from 'redux-saga/effects'
import getItems from '../fetchAPI/benefits/getItems'
import addItem from '../fetchAPI/benefits/addItem'
import deleteItem from '../fetchAPI/benefits/deleteItem'
import editItem from '../fetchAPI/benefits/editItem'
import searchItems from '../fetchAPI/benefits/searchItems'
import * as types from '../constant'

function* getListBenefit() {
    try {
        const res = yield getItems()
        yield put({
            type: types.GET_BENEFIT_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_BENEFIT_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* addListBenefit(action) {
    try {
        console.log(action.payload)
        const res = yield addItem(action.payload)
        yield put({
            type: types.ADD_BENEFIT_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_BENEFIT_REQUEST,
            payload: action.payload
        })
    } catch (error) {
        yield put({
            type: types.ADD_BENEFIT_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* editListBenefit(action) {
    try {
        console.log("Edittt" + action.payload)
        const res = yield editItem(action.payload)
        yield put({
            type: types.EDIT_BENEFIT_SUCCESS,
            payload: res
        })
        if (action.payload.textSearch !== '') {
            yield put({
                type: types.SEARCH_BENEFIT_REQUEST,
                payload: action.payload.textSearch
            })
        } else {
            yield put({
                type: types.GET_BENEFIT_REQUEST,
                payload: action.payload
            })
        }
    } catch (error) {
        yield put({
            type: types.EDIT_BENEFIT_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* deleteListBenefit(action) {
    try {
        console.log(action.payload)
        const res = yield deleteItem(action.payload)
        yield put({
            type: types.DELETE_BENEFIT_SUCCESS,
            payload: res
        })
        if (action.payload.textSearch !== '') {
            yield put({
                type: types.SEARCH_BENEFIT_REQUEST,
                payload: action.payload.textSearch
            })
        } else {
            yield put({
                type: types.GET_BENEFIT_REQUEST,
                payload: action.payload
            })
        }
    } catch (error) {
        yield put({
            type: types.DELETE_BENEFIT_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* searchListBenefit(action) {
    try {
        console.log(action.payload)
        const res = yield searchItems(action.payload)
        yield put({
            type: types.SEARCH_BENEFIT_SUCCESS,
            payload: {
                listBenefits: res,
                textSearch: action.payload.textSearch
            }
        })
    } catch (error) {
        yield put({
            type: types.SEARCH_BENEFIT_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

export const HomeBenefitSaga = [
    takeEvery(types.GET_BENEFIT_REQUEST, getListBenefit),
    takeEvery(types.ADD_BENEFIT_REQUEST, addListBenefit),
    takeEvery(types.DELETE_BENEFIT_REQUEST, deleteListBenefit),
    takeEvery(types.EDIT_BENEFIT_REQUEST, editListBenefit),
    takeEvery(types.SEARCH_BENEFIT_REQUEST, searchListBenefit),
]