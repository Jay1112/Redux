import { combineReducers, createStore, applyMiddleware } from "redux";
import { productsReducer } from "./features/products/reducer";
import { createLogger } from "redux-logger";

let middlewares = [];

if(process.env.NODE_ENV === 'development'){
    const reduxLogger = createLogger({
        collapsed: true
    });
    middlewares.push(reduxLogger);
}

const rootReducer = combineReducers({
    product: productsReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

export default store;