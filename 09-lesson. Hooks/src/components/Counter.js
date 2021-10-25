import React, { useState, useEffect } from "react";

// React.useState

export default function Counter() {
    let [count, setCoutState] = useState(0); // [state, updater]

    let handleIncrement = () => {
        // console.log("handleIncrement обновляем state");
        document.title = `You clicked ${count + 1} times`;
        setCoutState(count + 1);
    };

    let [textValue, setTextValue] = useState("");
    let handeleChange = (event) => {
        // console.log("handeleChange обновляем state");
        setTextValue(event.target.value);
    };

    // useEffect(() => {
    //     console.log("компонент Counter обновился");
    // }, [textValue]);

    useEffect(() => {
        console.log("компонент Counter обновился");
    }, [textValue]);

    return (
        <div>
            <input type="text" value={textValue} onChange={handeleChange} />
            <p>You clicked {count} times</p>
            <button type="button" onClick={handleIncrement}>
                Increment counter
            </button>
        </div>
    );
}

/* import React, { Component } from "react";

export default class Counter extends Component {
    state = {
        count: 0,
    };

    handleIncrement = () => {
        this.setState((state) => ({ count: state.count + 1 }));
    };

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            document.title = `You clicked ${this.state.count} times`;
        }
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button type="button" onClick={this.handleIncrement}>
                    Increment counter
                </button>
            </div>
        );
    }
}
 */
