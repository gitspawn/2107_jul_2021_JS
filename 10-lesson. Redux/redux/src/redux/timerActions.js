// Action creator
// import Type from "./actionTypes";

export const Type = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    CHANGE_STEP: "CHANGE_STEP",
};

export let onIncrement = (value) => {
    return { type: Type.INCREMENT, payload: value };
};

export let onDecrement = (value) => {
    return { type: Type.DECREMENT, payload: value };
};

export let onChangeStep = (step) => {
    return { type: Type.CHANGE_STEP, payload: { step: Number(step) } };
};

// export default { onIncrement, onDecrement };

// export let onIncrement = (value)=>{
//     return {
//         type: 'increment',
//         payload: value
//     }
// }

// onDectement

// let action = {
//     type: 'increment',
//     payload: {
//         number: 10
//     }
// }

// let action = {
//     type: 'increment',
//     payload: {
//         number: 50
//     }
// }

// let action = {
//     type: 'increment',
//     payload: {
//         number: 100
//     }
// }
