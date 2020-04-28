import { put, takeEvery } from 'redux-saga/effects'
import getItems from '../fetchAPI/slides/getItems'
import addItem from '../fetchAPI/slides/addItem'
import deleteItem from '../fetchAPI/slides/deleteItem'
import editItem from '../fetchAPI/slides/editItem'
import searchItems from '../fetchAPI/slides/searchItems'
import * as types from '../constant'

function* getListSlide() {
    try {
        const res = yield getItems()
        yield put({
            type: types.GET_SLIDE_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_SLIDE_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* addListSlide(action) {
    try {
        console.log(action.payload)
        const res = yield addItem(action.payload)
        yield put({
            type: types.ADD_SLIDE_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_SLIDE_REQUEST,
            payload: action.payload
        })
    } catch (error) {
        yield put({
            type: types.ADD_SLIDE_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* editListSlide(action) {
    try {
        console.log("Edittt" + action.payload)
        const res = yield editItem(action.payload)
        yield put({
            type: types.EDIT_SLIDE_SUCCESS,
            payload: res
        })
        if (action.payload.textSearch !== '') {
            yield put({
                type: types.SEARCH_SLIDE_REQUEST,
                payload: action.payload.textSearch
            })
        } else {
            yield put({
                type: types.GET_SLIDE_REQUEST,
                payload: action.payload
            })
        }
    } catch (error) {
        yield put({
            type: types.EDIT_SLIDE_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* deleteListSlide(action) {
    try {
        console.log(action.payload)
        const res = yield deleteItem(action.payload)
        yield put({
            type: types.DELETE_SLIDE_SUCCESS,
            payload: res
        })
        if (action.payload.textSearch !== '') {
            yield put({
                type: types.SEARCH_SLIDE_REQUEST,
                payload: action.payload.textSearch
            })
        } else {
            yield put({
                type: types.GET_SLIDE_REQUEST,
                payload: action.payload
            })
        }
    } catch (error) {
        yield put({
            type: types.DELETE_SLIDE_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* searchListSlide(action) {
    try {
        console.log(action.payload)
        const res = yield searchItems(action.payload)
        yield put({
            type: types.SEARCH_SLIDE_SUCCESS,
            payload: {
                listSlides: res,
                textSearch: action.payload.textSearch
            }
        })
    } catch (error) {
        yield put({
            type: types.SEARCH_SLIDE_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

export const HomeSlideSaga = [
    takeEvery(types.GET_SLIDE_REQUEST, getListSlide),
    takeEvery(types.ADD_SLIDE_REQUEST, addListSlide),
    takeEvery(types.DELETE_SLIDE_REQUEST, deleteListSlide),
    takeEvery(types.EDIT_SLIDE_REQUEST, editListSlide),
    takeEvery(types.SEARCH_SLIDE_REQUEST, searchListSlide),
]