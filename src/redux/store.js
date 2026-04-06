import { combineReducers, createStore, applyMiddleware } from "redux";
import { productsReducer } from "./features/products/reducer";
import { getReduxMiddlewares } from "./middlewares";

const rootReducer = combineReducers({
    product: productsReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(...getReduxMiddlewares())
);

export default store;