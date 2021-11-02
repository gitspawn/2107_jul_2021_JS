import React from "react";
import { connect } from "react-redux";
import tasksActions from "../../redux/tasks/tasksActions";

function FilterForm({ value, onChangeFilter }) {
    return (
        <label>
            Filter tasks
            <input
                type="text"
                value={value}
                onChange={(event) => onChangeFilter(event.target.value)}
            />
        </label>
    );
}

let mapStateToProps = (state) => ({
    value: state.tasks.filter,
});

let mapDispatchToProps = {
    onChangeFilter: tasksActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);
