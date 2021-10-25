import React, { useState } from "react";

const styles = {
    form: {
        width: 320,
    },
    label: {
        display: "flex",
        flexDirection: "column",
    },
};

// Вызываем хуки только в реакт компонентах
// setState()

export default function SignupForm() {
    // let [state, setFormState] = useState({ email: "", password: "" });

    // if () {
    //     useState()
    // }

    // let sum = ()=>{
    //     useState()
    // }

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let updateEmail = (event) => {
        setEmail(event.target.value);
    };

    let updatePassword = (event) => {
        setPassword(event.target.value);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Form submited ${email} ${password}`);
    };

    return (
        <form style={styles.form} onSubmit={handleSubmit}>
            <label style={styles.label}>
                <span>Email</span>
                <input
                    type="email"
                    name="email"
                    onChange={updateEmail}
                    value={email}
                />
            </label>

            <label style={styles.label}>
                <span>Password</span>
                <input
                    type="password"
                    name="password"
                    onChange={updatePassword}
                    value={password}
                />
            </label>

            <button type="submit">Sign up</button>
        </form>
    );
}

// import React, { Component } from "react";

// const styles = {
//     form: {
//         width: 320,
//     },
//     label: {
//         display: "flex",
//         flexDirection: "column",
//     },
// };

// export default class SignupForm extends Component {
//     state = {
//         email: "",
//         password: "",
//     };

//     handleChange = (evt) => {
//         const { name, value } = evt.target;
//         this.setState({ [name]: value });
//     };

//     render() {
//         return (
//             <form style={styles.form}>
//                 <label style={styles.label}>
//                     <span>Email</span>
//                     <input
//                         type="email"
//                         name="email"
//                         onChange={this.handleChange}
//                         value={this.state.email}
//                     />
//                 </label>

//                 <label style={styles.label}>
//                     <span>Password</span>
//                     <input
//                         type="password"
//                         name="password"
//                         onChange={this.handleChange}
//                         value={this.state.password}
//                     />
//                 </label>

//                 <button type="submit">Sign up</button>
//             </form>
//         );
//     }
// }
