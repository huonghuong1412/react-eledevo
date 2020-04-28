import * as types from '../constant'
const DEFAULT_STATE = {
    listDifferences: [],
    textSearch: '',
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null
}

export default(state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_DIFFERENCE_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.GET_DIFFERENCE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listDifferences: action.payload,
                textSearch: action.payload.textSearch
            }
        case types.GET_DIFFERENCE_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.ADD_DIFFERENCE_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.ADD_DIFFERENCE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.ADD_DIFFERENCE_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.EDIT_DIFFERENCE_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.EDIT_DIFFERENCE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.EDIT_DIFFERENCE_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.DELETE_DIFFERENCE_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.DELETE_DIFFERENCE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.DELETE_DIFFERENCE_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.SEARCH_DIFFERENCE_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.SEARCH_DIFFERENCE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listDifferences: action.payload.listDifferences,
                textSearch: action.payload.textSearch
            }
        case types.SEARCH_DIFFERENCE_FAILURE:
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