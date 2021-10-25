import React, { useState, useEffect, useRef } from "react";

export default function Clock() {
    let [time, setTime] = useState(new Date());

    let intervalID = useRef();
    // console.log(intervalID);

    useEffect(() => {
        // console.log("useEffect");
        intervalID.current = setInterval(() => {
            // console.log("setInterval");
            setTime(new Date());
        }, 1000);

        return () => {
            console.log("Executes before next useEffect");
            clearInterval(intervalID.current);
        };
    });

    return <p>Current time: {time.toLocaleTimeString()}</p>;
}

// import React, { Component } from "react";

// export default class Clock extends Component {
//     state = {
//         time: new Date(),
//     };

//     intervalId = null;

//     componentDidMount() {
//         this.intervalId = setInterval(() => {
//             this.setState({ time: new Date() });
//         }, 1000);
//     }

//     componentWillUnmount() {
//         console.log("Clock unmount");
//         clearInterval(this.intervalId);
//     }

//     render() {
//         return <p>Current time: {this.state.time.toLocaleTimeString()}</p>;
//     }
// }

// let vova = {
//     name: "Vova",
//     age: 25,
// };

// vova.stgatus = "Admin";
// vova.isRegistered = true;

// useEffect() - сдедит за измением пропов или стейта между рендерами

/*
useEffect(callback, [dependensies])

useEffect(()=>{
    return ()=>{
        Executes before next useEffect // componentWillUnmount
    }
}, [dependensies])


useEffect(callback, []) - componentDidMount
useEffect(callback, [dep1, dep2]) - componentDidUpdate
*/
