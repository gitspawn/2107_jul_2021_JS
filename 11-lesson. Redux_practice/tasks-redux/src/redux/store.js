import { createStore, combineReducers } from "redux";
import tasksReducers from "./tasks/tasksReducers";

let rootReducer = combineReducers({
    tasks: tasksReducers,
});

let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
