import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component {
    componentDidMount() {
        console.log("Modal did mount");
        window.addEventListener("keydown", this.handleKaydown);
    }

    componentWillUnmount() {
        console.log("Modal unmounted");
        window.removeEventListener("keydown", this.handleKaydown);
    }

    handleKaydown = (event) => {
        if (event.code === "Escape") {
            console.log("Нажали Escape");
            this.props.onCloseModal();
        }
    };

    render() {
        return (
            <div className="Backdrop" onClick={() => this.props.onCloseModal()}>
                <div className="Modal">{this.props.children}</div>
            </div>
        );
    }
}
