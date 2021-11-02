import React from "react";
import "./TaskList.css";
import TaskListItem from "./TaskListItem";

import { connect } from "react-redux";
import tasksActions from "../../../redux/tasks/tasksActions";

function TaskList({ tasks, onRemoveTask, onToggleCompleted }) {
    return (
        <ul className="TaskList">
            {tasks.map(({ id, text, completed }) => (
                <TaskListItem
                    key={id}
                    text={text}
                    completed={completed}
                    onRemove={() => onRemoveTask(id)}
                    onUpdate={() => onToggleCompleted(id)}
                />
            ))}
        </ul>
    );
}

// let mapStateToProps = (state) => ({
//     tasks: state.tasks.items,
// });

// let mapStateToProps = (state) => {
//     let { items, filter } = state.tasks;
//     let visibleTasks = items.filter((task) => task.text.includes(filter));

//     return {
//         tasks: visibleTasks,
//     };
// };

//Убрать пробелы, привести к регистру, проверки и т.д.
let mapStateToProps = (state) => {
    let { items, filter } = state.tasks;
    let filterToLower = filter.toLowerCase();
    let visibleTasks = items.filter((task) =>
        task.text.toLowerCase().includes(filterToLower)
    );

    return {
        tasks: visibleTasks,
    };
};

// {
//     id: uuidv4(),
//     text,
//     completed: false,
// }

let mapDispatchToProps = {
    onRemoveTask: tasksActions.removeTask,
    onToggleCompleted: tasksActions.toggleComleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
