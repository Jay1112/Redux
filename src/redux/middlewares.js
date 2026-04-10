import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";

export function getReduxMiddlewares(){
    let middlewares = [];

    if(process.env.NODE_ENV === 'development'){
        const reduxLogger = createLogger({
            collapsed: true
        });
        middlewares.push(reduxLogger);
    }
    middlewares.push(thunk);

    return middlewares;
}