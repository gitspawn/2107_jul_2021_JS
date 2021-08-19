// REPL

// const messasge = "Hello from NodeJs";
// console.log(messasge);

// let sum = (a, b) => {
//     console.log(a + b);
// };
// sum(5, 10);

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello = () => {
        console.log(`Hello ${this.name}, you are ${this.age}`);
    };
}
let vova = new User("Vova", 25);
vova.sayHello();

// console.log(window);
// console.log(document);

// console.log(process.env);
// __dirname

// console.log(__dirname);
// console.log(__filename);

// let http = require("http");
let path = require("path");
console.log(path);
console.log(path.resolve(__filename));

// console.log(http);

// let server = http.createServer((req, res) => {
//     // console.log(req);
//     console.log(res);
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "html");
//     res.end("<h1>Hello from NodeJs</h1>");
// });

// server.listen(5001, "localhost", () => {
//     console.log(`Server is running...`);
// });

// NPM - nodejs pakage manager

// NPM;
// 1. site https://www.npmjs.com/
// 2. CLI
// 3. Pakage rejistry

// Package - это JS библиотека решающая специфическую задачу
