import { put, takeEvery } from 'redux-saga/effects'
import getItems from '../fetchAPI/feedbacks/getItems'
import addItem from '../fetchAPI/feedbacks/addItem'
import deleteItem from '../fetchAPI/feedbacks/deleteItem'
import editItem from '../fetchAPI/feedbacks/editItem'
import searchItems from '../fetchAPI/feedbacks/searchItems'
import * as types from '../constant'

function* getListFeedback() {
    try {
        const res = yield getItems()
        yield put({
            type: types.GET_FEEDBACK_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_FEEDBACK_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* addListFeedback(action) {
    try {
        console.log(action.payload)
        const res = yield addItem(action.payload)
        yield put({
            type: types.ADD_FEEDBACK_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_FEEDBACK_REQUEST,
            payload: action.payload
        })
    } catch (error) {
        yield put({
            type: types.ADD_FEEDBACK_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* editListFeedback(action) {
    try {
        console.log("Edittt" + action.payload)
        const res = yield editItem(action.payload)
        yield put({
            type: types.EDIT_FEEDBACK_SUCCESS,
            payload: res
        })
        if (action.payload.textSearch !== '') {
            yield put({
                type: types.SEARCH_FEEDBACK_REQUEST,
                payload: action.payload.textSearch
            })
        } else {
            yield put({
                type: types.GET_FEEDBACK_REQUEST,
                payload: action.payload
            })
        }
    } catch (error) {
        yield put({
            type: types.EDIT_FEEDBACK_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* deleteListFeedback(action) {
    try {
        console.log(action.payload)
        const res = yield deleteItem(action.payload)
        yield put({
            type: types.DELETE_FEEDBACK_SUCCESS,
            payload: res
        })
        if (action.payload.textSearch !== '') {
            yield put({
                type: types.SEARCH_FEEDBACK_REQUEST,
                payload: action.payload.textSearch
            })
        } else {
            yield put({
                type: types.GET_FEEDBACK_REQUEST,
                payload: action.payload
            })
        }
    } catch (error) {
        yield put({
            type: types.DELETE_FEEDBACK_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* searchListFeedback(action) {
    try {
        console.log(action.payload)
        const res = yield searchItems(action.payload)
        yield put({
            type: types.SEARCH_FEEDBACK_SUCCESS,
            payload: {
                listFeedbacks: res,
                textSearch: action.payload.textSearch
            }
        })
    } catch (error) {
        yield put({
            type: types.SEARCH_FEEDBACK_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

export const HomeFeedbackSaga = [
    takeEvery(types.GET_FEEDBACK_REQUEST, getListFeedback),
    takeEvery(types.ADD_FEEDBACK_REQUEST, addListFeedback),
    takeEvery(types.DELETE_FEEDBACK_REQUEST, deleteListFeedback),
    takeEvery(types.EDIT_FEEDBACK_REQUEST, editListFeedback),
    takeEvery(types.SEARCH_FEEDBACK_REQUEST, searchListFeedback),
]