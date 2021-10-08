// import React from 'react';

// export default function TaskEditor({ onHandleAddTask }) {
//     return (
//         <div>
//             <button onClick={onHandleAddTask} type="button">
//                 Add Task
//             </button>
//         </div>
//     );
// }

import React, { Component } from 'react';

export default class TaskEditor extends Component {
    state = {
        text: '',
    };

    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.props);
        this.props.onHandleAddTask(this.state.text);
        this.setState({
            text: '',
        });
    };

    handleChange = event => {
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
