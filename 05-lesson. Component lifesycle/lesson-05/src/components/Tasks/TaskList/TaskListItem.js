import React from 'react';
import './TaskList.css';

export default function TaskListItem({ text, onRemove, completed, onUpdate }) {
    return (
        <li className="TaskList-item">
            <p className="TaskList-text">{text}</p>
            <section className="TaskList-actions">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={onUpdate}
                />

                <button
                    onClick={onRemove}
                    type="button"
                    className="TaskList-button"
                >
                    Delete
                </button>
            </section>
        </li>
    );
}
