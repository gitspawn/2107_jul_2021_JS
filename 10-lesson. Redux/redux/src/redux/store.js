import { createStore } from "redux";
import { combineReducers } from "redux";

import timerReducer from "./timerReducer";

let rootReducer = combineReducers({
    timer: timerReducer,
});

let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

/* import { createStore } from "redux";

let reducer = (state = "vova", action) => {
    return state;
};

let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store; */
