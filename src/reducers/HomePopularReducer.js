import * as types from '../constant'
const DEFAULT_STATE = {
    listPopulars: [],
    textSearch: '',
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null
}

export default(state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_POPULAR_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.GET_POPULAR_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listPopulars: action.payload,
                textSearch: action.payload.textSearch
            }
        case types.GET_POPULAR_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.ADD_POPULAR_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.ADD_POPULAR_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.ADD_POPULAR_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.EDIT_POPULAR_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.EDIT_POPULAR_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.EDIT_POPULAR_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.DELETE_POPULAR_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.DELETE_POPULAR_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.DELETE_POPULAR_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.SEARCH_POPULAR_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.SEARCH_POPULAR_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listPopulars: action.payload.listPopulars,
                textSearch: action.payload.textSearch
            }
        case types.SEARCH_POPULAR_FAILURE:
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