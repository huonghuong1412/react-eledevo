import { put, takeEvery } from 'redux-saga/effects'
import getItems from '../fetchAPI/populars/getItems'
import addItem from '../fetchAPI/populars/addItem'
import deleteItem from '../fetchAPI/populars/deleteItem'
import editItem from '../fetchAPI/populars/editItem'
import searchItems from '../fetchAPI/populars/searchItems'
import * as types from '../constant'

function* getListPopular() {
    try {
        const res = yield getItems()
        yield put({
            type: types.GET_POPULAR_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_POPULAR_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* addListPopular(action) {
    try {
        console.log(action.payload)
        const res = yield addItem(action.payload)
        yield put({
            type: types.ADD_POPULAR_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_POPULAR_REQUEST,
            payload: action.payload
        })
    } catch (error) {
        yield put({
            type: types.ADD_POPULAR_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* editListPopular(action) {
    try {
        console.log("Edittt" + action.payload)
        const res = yield editItem(action.payload)
        yield put({
            type: types.EDIT_POPULAR_SUCCESS,
            payload: res
        })
        if (action.payload.textSearch !== '') {
            yield put({
                type: types.SEARCH_POPULAR_REQUEST,
                payload: action.payload.textSearch
            })
        } else {
            yield put({
                type: types.GET_POPULAR_REQUEST,
                payload: action.payload
            })
        }
    } catch (error) {
        yield put({
            type: types.EDIT_POPULAR_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* deleteListPopular(action) {
    try {
        console.log(action.payload)
        const res = yield deleteItem(action.payload)
        yield put({
            type: types.DELETE_POPULAR_SUCCESS,
            payload: res
        })
        if (action.payload.textSearch !== '') {
            yield put({
                type: types.SEARCH_POPULAR_REQUEST,
                payload: action.payload.textSearch
            })
        } else {
            yield put({
                type: types.GET_POPULAR_REQUEST,
                payload: action.payload
            })
        }
    } catch (error) {
        yield put({
            type: types.DELETE_POPULAR_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* searchListPopular(action) {
    try {
        console.log(action.payload)
        const res = yield searchItems(action.payload)
        yield put({
            type: types.SEARCH_POPULAR_SUCCESS,
            payload: {
                listPopulars: res,
                textSearch: action.payload.textSearch
            }
        })
    } catch (error) {
        yield put({
            type: types.SEARCH_POPULAR_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

export const HomePopularSaga = [
    takeEvery(types.GET_POPULAR_REQUEST, getListPopular),
    takeEvery(types.ADD_POPULAR_REQUEST, addListPopular),
    takeEvery(types.DELETE_POPULAR_REQUEST, deleteListPopular),
    takeEvery(types.EDIT_POPULAR_REQUEST, editListPopular),
    takeEvery(types.SEARCH_POPULAR_REQUEST, searchListPopular),
]