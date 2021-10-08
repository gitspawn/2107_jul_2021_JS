import React from 'react';

export default function FilterForm({ value, onChangeFilter }) {
    return (
        <label>
            Filter tasks
            <input
                type="text"
                value={value}
                onChange={event => onChangeFilter(event.target.value)}
            />
        </label>
    );
}
