import { put, takeEvery } from 'redux-saga/effects'
import getItems from '../fetchAPI/register/getItems'
import addItem from '../fetchAPI/register/addItem'
import deleteItem from '../fetchAPI/register/deleteItem'
import editItem from '../fetchAPI/register/editItem'
import searchItems from '../fetchAPI/register/searchItems'
import * as types from '../constant'

function* getListRegister() {
    try {
        const res = yield getItems()
        yield put({
            type: types.GET_REGISTER_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_REGISTER_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* addListRegister(action) {
    try {
        console.log(action.payload)
        const res = yield addItem(action.payload)
        yield put({
            type: types.ADD_REGISTER_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_REGISTER_REQUEST,
            payload: action.payload
        })
    } catch (error) {
        yield put({
            type: types.ADD_REGISTER_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* editListRegister(action) {
    try {
        console.log("Edittt" + action.payload)
        const res = yield editItem(action.payload)
        yield put({
            type: types.EDIT_REGISTER_SUCCESS,
            payload: res
        })
        if (action.payload.textSearch !== '') {
            yield put({
                type: types.SEARCH_REGISTER_REQUEST,
                payload: action.payload.textSearch
            })
        } else {
            yield put({
                type: types.GET_REGISTER_REQUEST,
                payload: action.payload
            })
        }
    } catch (error) {
        yield put({
            type: types.EDIT_REGISTER_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* deleteListRegister(action) {
    try {
        console.log(action.payload)
        const res = yield deleteItem(action.payload)
        yield put({
            type: types.DELETE_REGISTER_SUCCESS,
            payload: res
        })
        if (action.payload.textSearch !== '') {
            yield put({
                type: types.SEARCH_REGISTER_REQUEST,
                payload: action.payload.textSearch
            })
        } else {
            yield put({
                type: types.GET_REGISTER_REQUEST,
                payload: action.payload
            })
        }
    } catch (error) {
        yield put({
            type: types.DELETE_REGISTER_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* searchListRegister(action) {
    try {
        console.log(action.payload)
        const res = yield searchItems(action.payload)
        yield put({
            type: types.SEARCH_REGISTER_SUCCESS,
            payload: {
                listRegisters: res,
                textSearch: action.payload.textSearch
            }
        })
    } catch (error) {
        yield put({
            type: types.SEARCH_REGISTER_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

export const HomeRegisterSaga = [
    takeEvery(types.GET_REGISTER_REQUEST, getListRegister),
    takeEvery(types.ADD_REGISTER_REQUEST, addListRegister),
    takeEvery(types.DELETE_REGISTER_REQUEST, deleteListRegister),
    takeEvery(types.EDIT_REGISTER_REQUEST, editListRegister),
    takeEvery(types.SEARCH_REGISTER_REQUEST, searchListRegister),
]