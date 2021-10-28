import React from "react";
import { connect } from "react-redux";
import { onChangeStep } from "../../redux/timerActions";

function StepSelector({ options, step, onChangeStep }) {
    return (
        <label>
            <select
                value={step}
                onChange={(event) => onChangeStep(event.target.value)}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    );
}

let mapStateToProps = (state) => {
    return {
        step: state.timer.step,
    };
};

let mapDispatchToProps = () => {
    return {
        onChangeStep: onChangeStep,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepSelector);
