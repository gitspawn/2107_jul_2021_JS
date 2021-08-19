// console.log("Sara");

let moduleA = require("./a");
console.log(moduleA);

let userName = "Sara";
const PI = 3.14;

let sayHello = () => {
    console.log("Hello world");
};

module.exports = {
    userName,
    PI,
    sayHello,
};

// let data = {
//     userName,
//     PI,
//     sayHello,
// };
// module.exports = data;

// module.exports = {
//     userName: userName,
//     PI: PI,
//     sayHello: sayHello,
// };
