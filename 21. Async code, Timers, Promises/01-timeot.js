// Sync
// console.log("First");
// console.log("Second");

// Async
// setInterval;
// setTimeout;
// clearInterval;
// clearTimeout;

// let timeout_1 = setTimeout(() => {
//     console.log("Timeout 1000");
// }, 1000);

// let timeout_2 = setTimeout(() => {
//     console.log("Timeout 3000");
// }, 3000);

// let timeout_3 = setTimeout(() => {
//     console.log("Timeout 500");
// }, 500);

// let timeout_4 = setTimeout(() => {
//     console.log("Timeout 500");
// }, 500);

// console.log(timeout_1);

// clearTimeout(timeout_1);
// console.log("Third");
// console.log(timeout_2);
// console.log(timeout_3);
// console.log(timeout_4);

// setInterval(() => {
//     console.log("Interval 2000");
// }, 2000);

// setInterval(() => {
//     console.log(new Date());
// }, 2000);

//=================================
console.log("First");

setTimeout(function () {
    console.log("Interval 2000");
}, 2000);

setTimeout(function () {
    console.log("Interval 500");
}, 500);

setTimeout(function () {
    console.log("Interval 0");
}, 0);

console.log("Second");

// First
// Second
// 0
// 500
// 2000
