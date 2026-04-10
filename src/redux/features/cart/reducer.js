import { CartActions } from "./constant";

const initialState = {
  bucket: {},
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CartActions.CART_ADD_PRODUCT: {
      const productId = action.payload;

      const productObj = state.bucket[productId]
        ? {
            quantity: state.bucket[productId].quantity + 1,
          }
        : {
            quantity: 1,
          };

      return {
        ...state,
        bucket: {
          ...state.bucket,
          [productId]: productObj,
        },
      };
    }

    case CartActions.CART_REMOVE_PRODUCT: {
      const productId = action.payload;

      const updatedBucket = { ...state.bucket };
      delete updatedBucket[productId];

      return {
        ...state,
        bucket: updatedBucket,
      };
    }

    default:
      return state;
  }
}
