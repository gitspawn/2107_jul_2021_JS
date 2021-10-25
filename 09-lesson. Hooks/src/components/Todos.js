import React, { useState, useReducer, useMemo } from "react";

import shortid from "shortid";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4,
    },
    wordsPerSentence: {
        max: 16,
        min: 4,
    },
});

//  Reducer Patern
// let action = {
//     type: 'addTodo',
//     payload:
// }

// let reducer = (state, action) =>{
// }

let todoReducer = (state, action) => {
    switch (action.type) {
        case "addTodo": {
            return [...state, action.payload.todo];
        }
        case "removeTodo": {
            return state.filter((todo) => todo.id !== action.payload.todoID);
        }

        default:
            return state;
    }
};

export default function Todos() {
    const [todos, dispatch] = useReducer(todoReducer, []);

    let addTodo = () => {
        const todo = {
            id: shortid.generate(),
            text: lorem.generateWords(3),
        };
        dispatch({ type: "addTodo", payload: { todo } });
    };

    let removeTodo = (todoID) => {
        dispatch({ type: "removeTodo", payload: { todoID } });
    };
    //===================================================

    let [filter, setFilter] = useState("");
    let changeFilter = (event) => {
        setFilter(event.target.value);
    };

    // const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    let filteredTodos = useMemo(() => {
        let data = todos.filter((todo) => todo.text.includes(filter));
        return data;
    }, [todos, filter]);

    return (
        <>
            <input type="text" onChange={changeFilter} value={filter} />
            <br />
            <button onClick={addTodo}>Add todo</button>

            <ul>
                {/* {todos.map((todo) => ( */}
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <button onClick={() => removeTodo(todo.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

// export default function Todos() {
//     let [todos, setTodos] = useState([]);

//     let addTodo = () => {
//         const todo = {
//             id: shortid.generate(),
//             text: lorem.generateWords(3),
//         };

//         setTodos((prevTodos) => {
//             // console.log(prevTodos);
//             return [...prevTodos, todo];
//         });
//     };

//     let removeTodo = (todoID) => {
//         setTodos(todos.filter((todo) => todo.id !== todoID));
//     };

//     let [filter, setFilter] = useState("");

//     return (
//         <>
//             {/* <input
//                 type="text"
//                 onChange={changeFilter}
//                 value={filter}
//             /> */}

//             <br />
//             <button onClick={addTodo}>Add todo</button>

//             <ul>
//                 {todos.map((todo) => (
//                     <li key={todo.id}>
//                         <span>{todo.text}</span>
//                         <button onClick={() => removeTodo(todo.id)}>
//                             Remove
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }

// import React, { Component } from "react";
// import shortid from "shortid";
// import { LoremIpsum } from "lorem-ipsum";

// const lorem = new LoremIpsum({
//     sentencesPerParagraph: {
//         max: 8,
//         min: 4,
//     },
//     wordsPerSentence: {
//         max: 16,
//         min: 4,
//     },
// });

// export default class Todos extends Component {
//     state = {
//         todos: [],
//         filter: "",
//     };

//     addTodo = () => {
//         const todo = {
//             id: shortid.generate(),
//             text: lorem.generateWords(3),
//         };

//         this.setState((state) => ({
//             todos: [...state.todos, todo],
//         }));
//     };

//     removeTodo = (todoId) => {
//         this.setState((state) => ({
//             todos: state.todos.filter((todo) => todo.id !== todoId),
//         }));
//     };

//     changeFilter = (evt) => {
//         this.setState({ filter: evt.target.value });
//     };

//     render() {
//         const filteredTodos = this.state.todos.filter((todo) =>
//             todo.text.includes(this.state.filter)
//         );

//         return (
//             <>
//                 <input
//                     type="text"
//                     onChange={this.changeFilter}
//                     value={this.state.filter}
//                 />

//                 <br />
//                 <button onClick={this.addTodo}>Add todo</button>

//                 <ul>
//                     {this.state.todos.map((todo) => (
//                         <li key={todo.id}>
//                             <span>{todo.text}</span>
//                             <button onClick={() => this.removeTodo(todo.id)}>
//                                 Remove
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </>
//         );
//     }
// }

// Мемоизация

// let sum = (a, b) => {
//     return a + b;
// };

// let toCash = sum(5, 10); // 15
//  toCash = sum(10, 50); // 60
//  toCash = sum(100, 50); // 150
//  toCash = sum(5, 10); // 15
// //  toCash = sum(5, 10); // 15
