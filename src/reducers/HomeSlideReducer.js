import * as types from '../constant'
const DEFAULT_STATE = {
    listSlides: [],
    textSearch: '',
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null
}

export default(state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_SLIDE_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.GET_SLIDE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listSlides: action.payload,
                textSearch: action.payload.textSearch
            }
        case types.GET_SLIDE_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.ADD_SLIDE_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.ADD_SLIDE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.ADD_SLIDE_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.EDIT_SLIDE_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.EDIT_SLIDE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.EDIT_SLIDE_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.DELETE_SLIDE_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.DELETE_SLIDE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.DELETE_SLIDE_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.SEARCH_SLIDE_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.SEARCH_SLIDE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listSlides: action.payload.listSlides,
                textSearch: action.payload.textSearch
            }
        case types.SEARCH_SLIDE_FAILURE:
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