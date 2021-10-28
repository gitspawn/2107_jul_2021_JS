import React from "react";
import { connect } from "react-redux";
import { onIncrement, onDecrement } from "../../redux/timerActions";

// console.log(onIncrement, onDecrement);

function Timer({ value, step, onIncrement, onDecrement }) {
    return (
        <div>
            <button onClick={() => onIncrement(step)}>Increment (+)</button>
            <span> {value} </span>
            <button onClick={() => onDecrement(step)}>Decrement (-)</button>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        value: state.timer.value,
        step: state.timer.step,
        vova: "vova",
        x: 10,
        y: 20,
    };
};

let mapDispatchToProps = (dispatch) => ({
    onIncrement: (step) => dispatch(onIncrement(step)),
    onDecrement: (step) => dispatch(onDecrement(step)),
});

// let mapDispatchToProps = {
//     onIncrement: onIncrement,
//     onDecrement: onDecrement,
// };

// export default Timer;
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
