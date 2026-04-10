import { CartActions } from "./constant"

export const addProductToCart = (value) => {
    return {
        type: CartActions.CART_ADD_PRODUCT,
        payload: value
    }
}

export const removeProductToCart = (value) => {
    return {
        type: CartActions.CART_REMOVE_PRODUCT,
        payload: value
    }
}