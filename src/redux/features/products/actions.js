import { ProductActions } from "./constants";

export const loadingProducts = (value) => {
  return {
    type: ProductActions.PRODUCTS_LOADING,
    payload: value,
  };
};

export const productsFetched = (value) => {
  return {
    type: ProductActions.PRODUCTS_FETCHED,
    payload: value,
  };
};

export const productsFetchedError = (value) => {
  return {
    type: ProductActions.PRODUCTS_ERROR,
    payload: value,
  };
};

export const setPage = (value) => {
  return {
    type: ProductActions.SET_PAGE,
    payload: value,
  };
};

export const fetchProducts = (page, limit = 9) => {
  return async (dispatch) => {
    dispatch(loadingProducts(true));
    try {
      const resp = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
      );
      const data = await resp.json();
      dispatch(productsFetched(data));
    } catch (error) {
      dispatch(productsFetchedError(error));
    } finally {
      dispatch(loadingProducts(false));
    }
  };
};
