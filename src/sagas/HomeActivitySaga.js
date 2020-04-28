import { put, takeEvery } from 'redux-saga/effects'
import getItems from '../fetchAPI/activities/getItems'
import addItem from '../fetchAPI/activities/addItem'
import deleteItem from '../fetchAPI/activities/deleteItem'
import editItem from '../fetchAPI/activities/editItem'
import searchItems from '../fetchAPI/activities/searchItems'
import * as types from '../constant'

function* getListActivity() {
    try {
        const res = yield getItems()
        yield put({
            type: types.GET_ACTIVITY_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_ACTIVITY_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* addListActivity(action) {
    try {
        console.log(action.payload)
        const res = yield addItem(action.payload)
        yield put({
            type: types.ADD_ACTIVITY_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_ACTIVITY_REQUEST,
            payload: action.payload
        })
    } catch (error) {
        yield put({
            type: types.ADD_ACTIVITY_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* editListActivity(action) {
    try {
        console.log("Edittt" + action.payload)
        const res = yield editItem(action.payload)
        yield put({
            type: types.EDIT_ACTIVITY_SUCCESS,
            payload: res
        })
        if (action.payload.textSearch !== '') {
            yield put({
                type: types.SEARCH_ACTIVITY_REQUEST,
                payload: action.payload.textSearch
            })
        } else {
            yield put({
                type: types.GET_ACTIVITY_REQUEST,
                payload: action.payload
            })
        }
    } catch (error) {
        yield put({
            type: types.EDIT_ACTIVITY_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* deleteListActivity(action) {
    try {
        console.log(action.payload)
        const res = yield deleteItem(action.payload)
        yield put({
            type: types.DELETE_ACTIVITY_SUCCESS,
            payload: res
        })
        if (action.payload.textSearch !== '') {
            yield put({
                type: types.SEARCH_ACTIVITY_REQUEST,
                payload: action.payload.textSearch
            })
        } else {
            yield put({
                type: types.GET_ACTIVITY_REQUEST,
                payload: action.payload
            })
        }
    } catch (error) {
        yield put({
            type: types.DELETE_ACTIVITY_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* searchListActivity(action) {
    try {
        console.log(action.payload)
        const res = yield searchItems(action.payload)
        yield put({
            type: types.SEARCH_ACTIVITY_SUCCESS,
            payload: {
                listActivities: res,
                textSearch: action.payload.textSearch
            }
        })
    } catch (error) {
        yield put({
            type: types.SEARCH_ACTIVITY_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

export const HomeActivitySaga = [
    takeEvery(types.GET_ACTIVITY_REQUEST, getListActivity),
    takeEvery(types.ADD_ACTIVITY_REQUEST, addListActivity),
    takeEvery(types.DELETE_ACTIVITY_REQUEST, deleteListActivity),
    takeEvery(types.EDIT_ACTIVITY_REQUEST, editListActivity),
    takeEvery(types.SEARCH_ACTIVITY_REQUEST, searchListActivity),
]