import { ProductActions } from "./constants"

export const loadingProducts = (value) => {
    return {
        type: ProductActions.PRODUCTS_LOADING,
        payload: value
    }
}

export const productsFetched = (value) => {
    return {
        type: ProductActions.PRODUCTS_FETCHED,
        payload: value
    }
}

export const productsFetchedError = (value) => {
    return {
        type: ProductActions.PRODUCTS_ERROR,
        payload: value
    }
}