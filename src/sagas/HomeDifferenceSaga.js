import { put, takeEvery } from 'redux-saga/effects'
import getItems from '../fetchAPI/differences/getItems'
import addItem from '../fetchAPI/differences/addItem'
import deleteItem from '../fetchAPI/differences/deleteItem'
import editItem from '../fetchAPI/differences/editItem'
import searchItems from '../fetchAPI/differences/searchItems'
import * as types from '../constant'

function* getListDifference() {
    try {
        const res = yield getItems()
        yield put({
            type: types.GET_DIFFERENCE_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_DIFFERENCE_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* addListDifference(action) {
    try {
        console.log(action.payload)
        const res = yield addItem(action.payload)
        yield put({
            type: types.ADD_DIFFERENCE_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_DIFFERENCE_REQUEST,
            payload: action.payload
        })
    } catch (error) {
        yield put({
            type: types.ADD_DIFFERENCE_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* editListDifference(action) {
    try {
        console.log("Edittt" + action.payload)
        const res = yield editItem(action.payload)
        yield put({
            type: types.EDIT_DIFFERENCE_SUCCESS,
            payload: res
        })
        if (action.payload.textSearch !== '') {
            yield put({
                type: types.SEARCH_DIFFERENCE_REQUEST,
                payload: action.payload.textSearch
            })
        } else {
            yield put({
                type: types.GET_DIFFERENCE_REQUEST,
                payload: action.payload
            })
        }
    } catch (error) {
        yield put({
            type: types.EDIT_DIFFERENCE_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* deleteListDifference(action) {
    try {
        console.log(action.payload)
        const res = yield deleteItem(action.payload)
        yield put({
            type: types.DELETE_DIFFERENCE_SUCCESS,
            payload: res
        })
        if (action.payload.textSearch !== '') {
            yield put({
                type: types.SEARCH_DIFFERENCE_REQUEST,
                payload: action.payload.textSearch
            })
        } else {
            yield put({
                type: types.GET_DIFFERENCE_REQUEST,
                payload: action.payload
            })
        }
    } catch (error) {
        yield put({
            type: types.DELETE_DIFFERENCE_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* searchListDifference(action) {
    try {
        console.log(action.payload)
        const res = yield searchItems(action.payload)
        yield put({
            type: types.SEARCH_DIFFERENCE_SUCCESS,
            payload: {
                listDifferences: res,
                textSearch: action.payload.textSearch
            }
        })
    } catch (error) {
        yield put({
            type: types.SEARCH_DIFFERENCE_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

export const HomeDifferenceSaga = [
    takeEvery(types.GET_DIFFERENCE_REQUEST, getListDifference),
    takeEvery(types.ADD_DIFFERENCE_REQUEST, addListDifference),
    takeEvery(types.DELETE_DIFFERENCE_REQUEST, deleteListDifference),
    takeEvery(types.EDIT_DIFFERENCE_REQUEST, editListDifference),
    takeEvery(types.SEARCH_DIFFERENCE_REQUEST, searchListDifference),
]