import { ProductActions } from "./constants";

const initialState = {
    loading: false,
    products : [],
    error: null
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
                products: action.payload
            }
        }

        case ProductActions.PRODUCTS_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }

        default:
            return state;
    }
}