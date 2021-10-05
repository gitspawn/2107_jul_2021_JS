import React from 'react';
import './TaskList.css';
import TaskListItem from './TaskListItem';

export default function TaskList({ tasks, onHandleRemoveTask }) {
    return (
        <ul className="TaskList">
            {tasks.map(({ id, text, completed }) => (
                <TaskListItem
                    key={id}
                    text={text}
                    onRemove={() => onHandleRemoveTask(id)}
                />
            ))}
        </ul>
    );
}

// export default function TaskList({ tasks, onHandleRemoveTask }) {
//     return (
//         <ul className="TaskList">
//             {tasks.map(({ id, text, completed }) => (
//                 <li key={id} className="TaskList-item">
//                     <p className="TaskList-text">{text}</p>
//                     <section className="TaskList-actions">
//                         <button
//                             // onClick={onHandleRemoveTask}
//                             onClick={() => onHandleRemoveTask(id)}
//                             type="button"
//                             className="TaskList-button"
//                         >
//                             Delete
//                         </button>
//                     </section>
//                 </li>
//             ))}
//         </ul>
//     );
// }
