import * as types from '../constant'
const DEFAULT_STATE = {
    listRegisters: [],
    textSearch: '',
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null
}

export default(state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_REGISTER_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.GET_REGISTER_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listRegisters: action.payload,
                textSearch: action.payload.textSearch
            }
        case types.GET_REGISTER_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.ADD_REGISTER_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.ADD_REGISTER_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.ADD_REGISTER_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.EDIT_REGISTER_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.EDIT_REGISTER_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.EDIT_REGISTER_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.DELETE_REGISTER_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.DELETE_REGISTER_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.DELETE_REGISTER_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.SEARCH_REGISTER_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.SEARCH_REGISTER_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listRegisters: action.payload.listRegisters,
                textSearch: action.payload.textSearch
            }
        case types.SEARCH_REGISTER_FAILURE:
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