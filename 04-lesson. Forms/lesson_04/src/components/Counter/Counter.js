import React, { Component } from 'react';
import propTypes from 'prop-types';
import CounterControls from './CounterControls';

// React.Component

export default class Counter extends Component {
    static defaultProps = { intialValue: 0, step: 1 };
    static propTypes;

    state = {
        value: this.props.intialValue,
        name: 'Sara',
        age: 25,
    };

    handleIcrement = event => {
        this.setState((prevState, props) => {
            return {
                value: prevState.value + props.step,
            };
        });
    };

    handleDecrement = event => {
        this.setState((prevState, props) => ({
            value: prevState.value - props.step,
        }));
    };

    render() {
        let { value } = this.state;

        return (
            <>
                <span> {value} </span>
                <CounterControls
                    onHandleIncrement={this.handleIcrement}
                    onHandleDecrement={this.handleDecrement}
                />
            </>
        );
    }
}

// Correct setState
// export default class Counter extends Component {
//     static defaultProps = { intialValue: 0, step: 1 };
//     static propTypes;

//     state = {
//         value: this.props.intialValue,
//         name: 'Sara',
//         age: 25,
//     };

//     // user = 'Vova'

//     // handleIcrement = event => {
//     //     this.setState({
//     //         value: this.state.value + 1,
//     //     });
//     // };

//     // handleDecrement = event => {
//     //     this.setState({
//     //         value: this.state.value - 1,
//     //     });
//     // };

//     handleIcrement = event => {
//         this.setState((prevState, props) => {
//             // console.log('prevState', prevState);

//             return {
//                 value: prevState.value + props.step,
//             };
//         });
//     };

//     handleDecrement = event => {
//         this.setState((prevState, props) => ({
//             value: prevState.value - props.step,
//         }));
//     };

//     render() {
//         let { value } = this.state;

//         return (
//             <>
//                 <button onClick={this.handleIcrement}>Increment</button>
//                 <span> {value} </span>
//                 <button onClick={this.handleDecrement}>Decrement</button>
//             </>
//         );
//     }
// }

// Satate usage
// export default class Counter extends Component {
//     static defaultProps = { intialValue: 0, step: 1 };
//     static propTypes;

//     state = {
//         value: this.props.intialValue,
//     };

//     // user = 'Vova'

//     handleIcrement = event => {
//         // console.log('Increment click', event);
//         // console.log(this);
//         console.log(this.props);
//     };

//     handleDecrement = event => {
//         console.log('Decrement click', event);
//         console.log(this);
//     };

//     render() {
//         let { value } = this.state;

//         return (
//             <>
//                 <button onClick={this.handleIcrement}>Increment</button>
//                 {/* <span>{this.state.value}</span> */}
//                 <span> {value} </span>
//                 <button onClick={this.handleDecrement}>Decrement</button>
//             </>
//         );
//     }
// }

// Classic State usage
// export default class Counter extends Component {
//     static defaultProps = { intialValue: 0, step: 1 };
//     static propTypes;

//     constructor(props) {
//         super(props);
//         this.handleIcrement = this.handleIcrement.bind(this);
//         this.handleDecrement = this.handleDecrement.bind(this);
//         this.state = {
//             name: 'Sara',
//             age: 40,
//             status: 'Admin',
//         };
//     }

//     handleIcrement(event) {
//         console.log('Increment click', event);
//         console.log(this);
//     }

//     handleDecrement(event) {
//         console.log('Decrement click', event);
//         console.log(this);
//     }

//     render() {
//         return (
//             <>
//                 {/* <button onClick={this.handleIcrement.bind(this)}> */}
//                 <button onClick={this.handleIcrement}>Increment</button>
//                 <span>2</span>
//                 {/* <button onClick={this.handleDecrement.bind(this)}> */}
//                 <button onClick={this.handleDecrement}>Decrement</button>
//             </>
//         );
//     }
// }

// Casllbaks events
// export default class Counter extends Component {
//     render() {
//         return (
//             <>
//                 <button
//                     onClick={event => {
//                         console.log('Increment click', event);
//                     }}
//                 >
//                     Increment
//                 </button>
//                 <span>2</span>
//                 <button
//                     onClick={event => {
//                         console.log('Decrement click', event.currentTarget);
//                     }}
//                 >
//                     Decrement
//                 </button>
//             </>
//         );
//     }
// }
