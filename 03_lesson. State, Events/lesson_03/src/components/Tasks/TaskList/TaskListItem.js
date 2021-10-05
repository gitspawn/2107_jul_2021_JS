import React from 'react';
import './TaskList.css';

export default function TaskListItem({ text, onRemove }) {
    return (
        <li className="TaskList-item">
            <p className="TaskList-text">{text}</p>
            <section className="TaskList-actions">
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
