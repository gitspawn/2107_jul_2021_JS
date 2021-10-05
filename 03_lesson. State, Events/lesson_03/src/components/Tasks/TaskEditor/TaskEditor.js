import React from 'react';

export default function TaskEditor({ onHandleAddTask }) {
    return (
        <div>
            <button onClick={onHandleAddTask} type="button">
                Add Task
            </button>
        </div>
    );
}
