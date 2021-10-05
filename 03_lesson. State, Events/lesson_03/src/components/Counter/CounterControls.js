import React from 'react';

export default function CounterControls(props) {
    return (
        <div>
            <button onClick={props.onHandleIncrement}>Increment</button>
            <button onClick={props.onHandleDecrement}>Decrement</button>
        </div>
    );
}
