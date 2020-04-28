import * as types from '../constant'
const DEFAULT_STATE = {
    listFeedbacks: [],
    textSearch: '',
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null
}

export default(state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_FEEDBACK_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.GET_FEEDBACK_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listFeedbacks: action.payload,
                textSearch: action.payload.textSearch
            }
        case types.GET_FEEDBACK_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.ADD_FEEDBACK_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.ADD_FEEDBACK_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.ADD_FEEDBACK_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.EDIT_FEEDBACK_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.EDIT_FEEDBACK_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.EDIT_FEEDBACK_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.DELETE_FEEDBACK_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.DELETE_FEEDBACK_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.DELETE_FEEDBACK_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.SEARCH_FEEDBACK_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.SEARCH_FEEDBACK_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listFeedbacks: action.payload.listFeedbacks,
                textSearch: action.payload.textSearch
            }
        case types.SEARCH_FEEDBACK_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        default:
            return state;
    }
}