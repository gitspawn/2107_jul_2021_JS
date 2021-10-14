import React, { Component } from "react";

export default class SearchForm extends Component {
    state = {
        inputValue: "",
    };

    handleSabmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputValue);
    };

    handleChange = (event) => {
        // console.log(event.target.value);
        this.setState({ inputValue: event.target.value });
    };

    render() {
        return (
            <form onSubmit={this.handleSabmit}>
                <label>
                    Type to search
                    <input
                        onChange={this.handleChange}
                        type="text"
                        value={this.state.inputValue}
                    />
                </label>

                <button type="submit">Search</button>
            </form>
        );
    }
}
