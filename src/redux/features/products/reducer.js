import { ProductActions } from "./constants";

const initialState = {
    loading: false,
    productList : [],
    error: null,
    page: 1
}

export function productsReducer(state = initialState, action){
    switch(action.type){
        case ProductActions.PRODUCTS_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }

        case ProductActions.PRODUCTS_FETCHED: {
            return {
                ...state,
                productList: action.payload
            }
        }

        case ProductActions.PRODUCTS_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }

        case ProductActions.SET_PAGE: {
            return {
                ...state,
                page: action.payload
            }
        }

        default:
            return state;
    }
}