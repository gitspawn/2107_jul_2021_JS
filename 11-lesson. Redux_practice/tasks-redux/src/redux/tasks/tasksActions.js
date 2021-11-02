import { v4 as uuidv4 } from "uuid";
import actionTypes from "./tasksActionTypes";

let addTask = (text) => ({
    type: actionTypes.ADD,
    payload: {
        task: {
            id: uuidv4(),
            text,
            completed: false,
        },
    },
});

let removeTask = (taskID) => ({
    type: actionTypes.REMOVE,
    payload: {
        taskID,
    },
});

let toggleComleted = (taskID) => ({
    type: actionTypes.TOGGLE_COMPLETED,
    payload: {
        taskID,
    },
});

let changeFilter = (filter) => ({
    type: actionTypes.CHANGE_FILTER,
    payload: {
        filter,
    },
});

export default {
    addTask,
    removeTask,
    toggleComleted,
    changeFilter,
};

//    handleAddTask = textValueFromFrom => {
//     // console.log('Add task', textValueFromFrom);
//     let task = {
//         id: uuidv4(),
//         text: textValueFromFrom,
//         completed: false,
//     };

//     // this.setState((prevState, props) => {
//     //     return {
//     //         tasks: [...prevState.tasks, task],
//     //     };
//     // });

//     this.setState((prevState, props) => ({
//         tasks: [...prevState.tasks, task],
//     }));
// };

// handleRemoveTask = taskID => {
//     // console.log(taskID);
//     // this.setState((prevSate, props) => {
//     //     return {
//     //         tasks: prevSate.tasks.filter(task => {
//     //             return task.id !== taskID;
//     //         }),
//     //     };
//     // });

//     this.setState((prevSate, props) => ({
//         tasks: prevSate.tasks.filter(({ id }) => id !== taskID),
//     }));
// };

// handleUpdateTask = taskID => {
//     // console.log(taskID);
//     this.setState((prevState, props) => {
//         return {
//             tasks: prevState.tasks.map(task => {
//                 if (task.id === taskID) {
//                     return {
//                         ...task,
//                         completed: !task.completed,
//                     };
//                 }
//                 return task;
//             }),
//         };
//     });
// };

// handleChangeFilter = textForFilter => {
//     // console.log(event.target.value);
//     console.log(textForFilter);
//     this.setState({
//         filter: textForFilter,
//     });
// };
