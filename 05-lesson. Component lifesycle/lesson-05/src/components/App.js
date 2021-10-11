import React, { Component } from "react";
import Layout from "./Layout";
// import Tasks from "./Tasks/";
// import Modal from "./Modal";
// import Clock from "./Clock";
import Tabs from "./Tabs";
import tabs from "../tabs.json";

export default class App extends Component {
    render() {
        return (
            <Layout>
                <Tabs items={tabs} />
            </Layout>
        );
    }
}

// Timer
// export default class App extends Component {
//     state = {
//         showClock: false,
//     };

//     toggleClock = () => {
//         this.setState((prevState, props) => {
//             return {
//                 showClock: !prevState.showClock,
//             };
//         });
//     };

//     render() {
//         let { showClock } = this.state;

//         return (
//             <Layout>
//                 {!showClock && (
//                     <button type="button" onClick={this.toggleClock}>
//                         Close Clock
//                     </button>
//                 )}

//                 {!showClock && <Clock />}
//             </Layout>
//         );
//     }
// }

// Modal
// export default class App extends Component {
//     state = {
//         showModal: false,
//     };

//     toggleModal = () => {
//         this.setState((prevState, props) => {
//             return {
//                 showModal: !prevState.showModal,
//             };
//         });
//     };

//     render() {
//         let { showModal } = this.state;

//         return (
//             <Layout>
//                 {/* <Tasks /> */}

//                 {!showModal && (
//                     <button onClick={this.toggleModal} type="button">
//                         Open modal
//                     </button>
//                 )}

//                 {showModal && (
//                     <Modal onCloseModal={this.toggleModal}>
//                         <button onClick={this.toggleModal}>Close modal</button>
//                         <h1>Modal title</h1>
//                         <p>Modal text lorem lorem lorem lorem</p>

//                         <form>
//                             <input type="text" />
//                             <button type="submit">Send form</button>
//                         </form>
//                     </Modal>
//                 )}
//             </Layout>
//         );
//     }
// }

// import React, { Component } from "react";
// export default class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "Vova",
//         };

//         console.log("Constructor");
//     }

//     componentDidMount() {
//         console.log("componentDidMount");
//         // http requests
//         // spiner, loader
// get fromLS
//         // addEventListeners
//         // this.setState()
//     }

//     // Вызывается когда пришли новые пропы или поменялся state
//     componentDidUpdate(prevProps, prevState) {
//         console.log("componentDidUpdate");
//     }

//     // Вызывается когда компонент удаляется из DOM
//     componentWillUnmount() {
//           // http requests
//             // removeEventListeners
//             // снимаем счетчики таймеры и т.д.
//             // cледим за утечкой памяти
//     }

//     render() {
//         console.log("Render");
//         return <div>Разметка и сомпоненты</div>;
//     }
// }
