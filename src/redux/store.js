import { combineReducers, createStore, applyMiddleware } from "redux";
import { productsReducer } from "./features/products/reducer";
import { getReduxMiddlewares } from "./middlewares";
import { cartReducer } from "./features/cart/reducer";

const rootReducer = combineReducers({
    product: productsReducer,
    cart: cartReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(...getReduxMiddlewares())
);

export default store;