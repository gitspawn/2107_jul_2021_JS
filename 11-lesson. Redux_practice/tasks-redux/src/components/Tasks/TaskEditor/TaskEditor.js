import React, { Component } from "react";
import { connect } from "react-redux";
import tasksActions from "../../../redux/tasks/tasksActions";

class TaskEditor extends Component {
    state = {
        text: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.props);
        this.props.onAddTask(this.state.text);
        this.setState({
            text: "",
        });
    };

    handleChange = (event) => {
        this.setState({
            text: event.target.value,
        });
    };

    render() {
        let { text } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Enter to add task
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={text}
                    />
                </label>
                <button type="submit">Add task</button>
            </form>
        );
    }
}

let mapDispathToProps = {
    onAddTask: tasksActions.addTask,
};

export default connect(null, mapDispathToProps)(TaskEditor);
