import React, { Component } from "react";

export default class SearchForm extends Component {
    state = {
        value: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({ value: "" });
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.value}
                />
                <button type="submit">Search</button>
            </form>
        );
    }
}
