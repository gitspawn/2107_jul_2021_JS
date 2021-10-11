import React, { Component } from "react";
import "./Clock.css";

export default class Clock extends Component {
    state = {
        time: new Date().toLocaleTimeString(),
    };

    intervalID = "";

    componentDidMount() {
        console.log("Clock DidMount");

        this.intervalID = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        console.log("Clock unmount");
        clearInterval(this.intervalID);
    }

    render() {
        let { time } = this.state;

        return <div className="Clockface">{time}</div>;
    }
}
