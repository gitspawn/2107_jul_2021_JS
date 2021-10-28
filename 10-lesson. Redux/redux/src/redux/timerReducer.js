// store = {
//     timer: {
//         value: 5,
//         step: 10,
//     },

//     articles: [],

//     users: [],

//     posts: [],
//     comments: []
// };

// store = {
//     value: 10,
//     step: 5
// }

// let action = { type: Type.INCREMENT, payload: value }
import { combineReducers } from "redux";
import { Type } from "./timerActions";
// console.log("Type", Type);

let valueReducer = (state = 0, action) => {
    switch (action.type) {
        case Type.INCREMENT:
            return state + action.payload;

        case Type.DECREMENT:
            return state - action.payload;

        default:
            return state;
    }
};

let stepReducer = (state = 5, { type, payload }) => {
    switch (type) {
        case Type.CHANGE_STEP:
            return payload.step;
        default:
            return state;
    }
};

export default combineReducers({
    value: valueReducer,
    step: stepReducer,
});

// {
//     timer: {
//         value: 0,
//         step : 5
//     }
// }
