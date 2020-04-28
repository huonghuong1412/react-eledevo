import * as types from '../constant'
const DEFAULT_STATE = {
    listActivities: [],
    textSearch: '',
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null
}

export default(state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_ACTIVITY_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.GET_ACTIVITY_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listActivities: action.payload,
                textSearch: action.payload.textSearch
            }
        case types.GET_ACTIVITY_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.ADD_ACTIVITY_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.ADD_ACTIVITY_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.ADD_ACTIVITY_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.EDIT_ACTIVITY_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.EDIT_ACTIVITY_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.EDIT_ACTIVITY_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.DELETE_ACTIVITY_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.DELETE_ACTIVITY_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.DELETE_ACTIVITY_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.SEARCH_ACTIVITY_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.SEARCH_ACTIVITY_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listActivities: action.payload.listActivities,
                textSearch: action.payload.textSearch
            }
        case types.SEARCH_ACTIVITY_FAILURE:
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