import actionTypes from "./tasksActionTypes";
import { combineReducers } from "redux";

let itemsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case actionTypes.ADD:
            return [...state, payload.task];

        case actionTypes.REMOVE:
            return state.filter((task) => task.id !== payload.taskID);

        case actionTypes.TOGGLE_COMPLETED:
            return state.map((task) => {
                return task.id === payload.taskID
                    ? { ...task, completed: !task.completed }
                    : task;
            });

        default:
            return state;
    }
};

let filterReducer = (state = "", { type, payload }) => {
    switch (type) {
        case actionTypes.CHANGE_FILTER:
            return payload.filter;

        default:
            return state;
    }
};

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});

//  {
//      tasks: {
//          items: []
//          filter: ''
//      },
//      timer: '',
//      users: []

//  }

// handleAddTask = (textValueFromFrom) => {
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

// handleRemoveTask = (taskID) => {
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

// handleUpdateTask = (taskID) => {
//     // console.log(taskID);
//     this.setState((prevState, props) => {
//         return {
//             tasks: prevState.tasks.map((task) => {
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

// handleChangeFilter = (textForFilter) => {
//     // console.log(event.target.value);
//     console.log(textForFilter);
//     this.setState({
//         filter: textForFilter,
//     });
// };

// getVisibleTasks = () => {
//     let { tasks, filter } = this.state;

//     return tasks.filter((task) => task.text.includes(filter));
// };
