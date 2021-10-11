import React, { Component } from "react";
import TaskEditor from "./TaskEditor";
import TaskList from "./TaskList";
import FilterForm from "./FilterForm";

// import createTask from '../../utils/create-task';
import { v4 as uuidv4 } from "uuid";

export default class Tasks extends Component {
    state = {
        tasks: [],
        filter: "",
    };

    componentDidMount() {
        console.log("componentDidMount");
        let tasksfromLS = localStorage.getItem("tasks");
        if (tasksfromLS) {
            this.setState({
                tasks: JSON.parse(tasksfromLS),
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        // console.log("prevProps", prevProps);
        // console.log("prevState", prevState);
        // console.log(this.state.tasks);

        if (prevState.tasks !== this.state.tasks) {
            // console.log("Могу записать в LS");
            localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
        }
    }

    handleAddTask = (textValueFromFrom) => {
        let task = {
            id: uuidv4(),
            text: textValueFromFrom,
            completed: false,
        };

        this.setState((prevState, props) => ({
            tasks: [...prevState.tasks, task],
        }));
    };

    handleRemoveTask = (taskID) => {
        this.setState((prevSate, props) => ({
            tasks: prevSate.tasks.filter(({ id }) => id !== taskID),
        }));
    };

    handleUpdateTask = (taskID) => {
        this.setState((prevState, props) => {
            return {
                tasks: prevState.tasks.map((task) => {
                    if (task.id === taskID) {
                        return {
                            ...task,
                            completed: !task.completed,
                        };
                    }
                    return task;
                }),
            };
        });
    };

    handleChangeFilter = (textForFilter) => {
        console.log(textForFilter);
        this.setState({
            filter: textForFilter,
        });
    };

    getVisibleTasks = () => {
        let { tasks, filter } = this.state;

        return tasks.filter((task) => task.text.includes(filter));
    };

    render() {
        let { tasks, filter } = this.state;
        let visibleTasks = this.getVisibleTasks();

        return (
            <div>
                <TaskEditor onHandleAddTask={this.handleAddTask} />
                <hr />
                {visibleTasks.length > 0 && (
                    <FilterForm
                        value={filter}
                        onChangeFilter={this.handleChangeFilter}
                    />
                )}

                {tasks.length > 0 && (
                    <TaskList
                        // tasks={tasks}
                        tasks={visibleTasks}
                        onHandleRemoveTask={this.handleRemoveTask}
                        onHandleUpdateTask={this.handleUpdateTask}
                    />
                )}
            </div>
        );
    }
}
