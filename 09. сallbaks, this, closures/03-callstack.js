// console.log("Start");
// console.log("Vova");
// console.log("End");

// ==========================

// console.log("Hello World");

// setTimeout
// setInterval

// setTimeout(callback, 2000)
// setInterval(callback, 2000)

// setTimeout(() => {
//     console.log("Hello Vova");
// }, 3500);

// setInterval(() => {
//     console.log(Date.now());
// }, 1000);

// ====================================================

console.log("Start");
console.log("Vova");
setTimeout(() => {
    console.log("1500");
}, 1500);

setTimeout(() => {
    console.log("0");
}, 0);
console.log("End");

// Start
// Vova
// End
// 0
// 1500
