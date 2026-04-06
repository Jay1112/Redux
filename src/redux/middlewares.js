import { createLogger } from "redux-logger";

export function getReduxMiddlewares(){
    let middlewares = [];

    if(process.env.NODE_ENV === 'development'){
        const reduxLogger = createLogger({
            collapsed: true
        });
        middlewares.push(reduxLogger);
    }

    return middlewares;
}