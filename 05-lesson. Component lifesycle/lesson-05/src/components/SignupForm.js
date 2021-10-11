import React, { Component } from "react";

// Паттерн Контролируемый элемент
// export default class SignupForm extends Component {
//   state = {
//     inputValue: "",
//   };
//   handleInputChange = (event) => {
//     console.log(event.target.value);
//     this.setState({ inputValue: event.target.value });
//   };
//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.value}
//           // onChange={(event) => {console.log(event.target.value)}}
//           onChange={this.handleInputChange}
//         ></input>
//       </div>
//     );
//   }
// }

// ====================================
// Signup form

const Subscription = {
  FREE: "free",
  PRO: "pro",
  PREMIUM: "premium",
};

export default class SignupForm extends Component {
  state = {
    email: "",
    password: "",
    agreed: false,
    subscription: null,
    age: "",
  };

  // handleEmailChange = (e) => {
  //   console.log(e.target.name);
  //   this.setState({ email: e.target.value });
  // };

  // handlePasswordChange = (e) => {
  //   console.log(e.target.name);
  //   this.setState({ password: e.target.value });
  // };

  // Один обработчик для нескольких элементов
  handleChange = (e) => {
    let { name, value } = e.target;
    // console.log(name, value);
    this.setState({
      [name]: value,
    });
  };

  handleSubscriptionChange = (e) => {
    this.setState({
      subscription: e.target.value,
    });
  };

  handleAgeChange = (e) => {
    this.setState({
      age: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    const { email, password, agreed, subscription, age } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {/* add label with id*/}
        {/* <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={this.handleEmailChange}
        ></input> */}
        {/* ================== */}
        {/* Add label  */}
        <label>
          Email
          <input
            name="email"
            type="email"
            value={email}
            // onChange={this.handleEmailChange}
            onChange={this.handleChange}
          ></input>
        </label>
        <br />
        <label>
          Password
          <input
            name="password"
            type="password"
            value={password}
            // onChange={this.handlePasswordChange}
            onChange={this.handleChange}
          ></input>
        </label>
        <br />
        {/* Radio button */}
        <div role="group">
          <label>
            <input
              type="radio"
              value={Subscription.FREE}
              checked={Subscription.FREE === subscription}
              onChange={this.handleSubscriptionChange}
            />
            Free
          </label>

          <label>
            <input
              type="radio"
              value={Subscription.PRO}
              checked={Subscription.PRO === subscription}
              onChange={this.handleSubscriptionChange}
            />
            Pro
          </label>

          <label>
            <input
              type="radio"
              value={Subscription.PREMIUM}
              checked={Subscription.PREMIUM === subscription}
              onChange={this.handleSubscriptionChange}
            />
            Premium
          </label>
        </div>
        <br />
        {/* Select */}
        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleAgeChange}>
            <option value="" disabled>
              Choose an option
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>
        <br />

        {/* Checkbox */}
        <label>
          Принимаю
          <input
            type="checkbox"
            checked={agreed}
            onChange={this.handleAgreedChange}
          ></input>
        </label>
        <button type="submit" disabled={agreed}>
          Submit as {email}
        </button>
      </form>
    );
  }
}
