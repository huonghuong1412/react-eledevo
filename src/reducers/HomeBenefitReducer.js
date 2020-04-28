import * as types from '../constant'
const DEFAULT_STATE = {
    listBenefits: [],
    textSearch: '',
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null
}

export default(state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_BENEFIT_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.GET_BENEFIT_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listBenefits: action.payload,
                textSearch: action.payload.textSearch
            }
        case types.GET_BENEFIT_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.ADD_BENEFIT_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.ADD_BENEFIT_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.ADD_BENEFIT_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.EDIT_BENEFIT_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.EDIT_BENEFIT_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.EDIT_BENEFIT_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.DELETE_BENEFIT_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.DELETE_BENEFIT_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.DELETE_BENEFIT_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.SEARCH_BENEFIT_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case types.SEARCH_BENEFIT_SUCCESS:
            return{
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listBenefits: action.payload.listBenefits,
                textSearch: action.payload.textSearch
            }
        case types.SEARCH_BENEFIT_FAILURE:
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