// input, change => onChange

import React, { Component } from 'react';

// Controlled Element
// export default class FormExample extends Component {
//     state = {
//         value: '',
//     };

//     handleInput = event => {
//         this.setState({ value: event.target.value });
//     };

//     render() {
//         return (
//             <>
//                 <input
//                     type="text"
//                     value={this.state.value}
//                     onChange={this.handleInput}
//                 />
//             </>
//         );
//     }
// }

// React Form

let Subscription = {
    FREE: 'free',
    BASIC: 'basic',
    PRO: 'pro',
};

export default class FormExample extends Component {
    state = {
        email: '',
        password: '',
        subscription: '',
        age: '',
        agreed: false,
    };

    handleSubmit = event => {
        event.preventDefault();

        console.log('Form has been sand');
        console.log(this.state.email);
        console.log(this.state.password);
    };

    // handlemailCahnge = event => {
    //     this.setState({ email: event.target.value });
    // };

    // handlpasswordCahnge = event => {
    //     this.setState({ password: event.target.value });
    // };

    handleChange = event => {
        // console.log('name', event.target.name);
        // console.log('value', event.target.value);
        let { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubscriptionChange = event => {
        this.setState({
            subscription: event.target.value,
        });
    };

    handleAgeChange = event => {
        let { value } = event.target;
        this.setState({
            age: value,
        });
    };

    handleAgreedChange = event => {
        this.setState({
            agreed: event.target.checked,
        });
    };

    render() {
        let { email, password, subscription, age, agreed } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                {/* <label id="_email_id">Email</label>
                <input
                    htmlFor="_email_id"
                    type="email"
                    value=""
                    onChange={this.handleemailCahnge}
                    placeholder="Email"
                /> */}

                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={email}
                        // onChange={this.handlemailCahnge}
                        onChange={this.handleChange}
                        placeholder="Email"
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        // onChange={this.handlpasswordCahnge}
                        onChange={this.handleChange}
                        placeholder="Password"
                    />
                </label>

                {/* Radio */}
                <div role="group">
                    <label>
                        Free
                        <input
                            type="radio"
                            value={Subscription.FREE}
                            checked={Subscription.FREE === subscription}
                            onChange={this.handleSubscriptionChange}
                        />
                    </label>
                    <label>
                        Basic
                        <input
                            type="radio"
                            value={Subscription.BASIC}
                            checked={Subscription.BASIC === subscription}
                            onChange={this.handleSubscriptionChange}
                        />
                    </label>
                    <label>
                        Pro
                        <input
                            type="radio"
                            value={Subscription.PRO}
                            checked={Subscription.PRO === subscription}
                            onChange={this.handleSubscriptionChange}
                        />
                    </label>
                </div>

                {/* Select */}
                <label>
                    Choose an age
                    <select
                        name="age"
                        value={age}
                        onChange={this.handleAgeChange}
                    >
                        <option value="">Choode an option</option>
                        <option value="8...14">8...14</option>
                        <option value="14...18">14...18</option>
                        <option value="18...28">18...28</option>
                        <option value="28+">28+</option>
                    </select>
                </label>

                {/* Checkbox */}

                <label>
                    I accept all requirments
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={this.handleAgreedChange}
                    />
                </label>

                <br />
                <button type="submit" disabled={!agreed}>
                    Send
                </button>
            </form>
        );
    }
}
