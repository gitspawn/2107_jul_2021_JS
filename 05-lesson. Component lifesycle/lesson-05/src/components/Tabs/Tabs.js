import React, { Component } from "react";

export default class Tabs extends Component {
    state = {
        activeIndex: 0,
        name: "Vova",
        lastName: "Smith",
    };

    // componentDidUpdate(prevProps, prevState) {
    //     console.log("prevProps", prevProps);
    //     console.log("prevState", prevState);
    // }

    shouldComponentUpdate(nextProps, nextState) {
        // if (nextState.activeIndex !== this.state.activeIndex) {
        //     console.log("shouldComponentUpdate");
        //     return true;
        // } else {
        //     return false;
        // }

        return nextState.activeIndex !== this.state.activeIndex;
    }

    setActiveIndex = (idx) => {
        this.setState({ activeIndex: idx });
    };

    render() {
        let { items } = this.props;
        let tab = items[this.state.activeIndex];

        // let userData = this.state.name + " " + this.state.lastName;

        // let userdata = {
        //     name: this.state.name,
        //     lastname: this.state.lastName,
        // };

        return (
            <>
                {/* {userData} */}
                <div>
                    {items.map(({ label }, idx) => (
                        <button
                            key={label}
                            type="button"
                            onClick={() => this.setActiveIndex(idx)}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div>
                    <h2>{tab.label}</h2>
                    <p>{tab.content}</p>
                </div>
            </>
        );
    }
}
