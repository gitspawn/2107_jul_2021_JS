import React, { Component } from 'react';
import TaskEditor from './TaskEditor';
import TaskList from './TaskList';
import createTask from '../../utils/create-task';
export default class Tasks extends Component {
    state = {
        tasks: [],
    };

    handleAddTask = event => {
        console.log('Add task');
        this.setState((perevState, props) => {
            return {
                tasks: [...perevState.tasks, createTask()],
            };
        });
    };

    handleRemoveTask = taskID => {
        // console.log(taskID);
        // this.setState((prevSate, props) => {
        //     return {
        //         tasks: prevSate.tasks.filter(task => {
        //             return task.id !== taskID;
        //         }),
        //     };
        // });

        this.setState((prevSate, props) => ({
            tasks: prevSate.tasks.filter(({ id }) => id !== taskID),
        }));
    };

    render() {
        let { tasks } = this.state;

        return (
            <div>
                <TaskEditor onHandleAddTask={this.handleAddTask} />
                {tasks.length > 0 && (
                    <TaskList
                        tasks={tasks}
                        onHandleRemoveTask={this.handleRemoveTask}
                    />
                )}
            </div>
        );
    }
}
