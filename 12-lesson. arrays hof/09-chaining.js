// let fruits = ["melon", "apples", "pears", "bananes"];

// let str = fruits.join(" ");

// console.log(str);

// let str = "abcdefg";
// let result = str.split("").reverse().join("").toUpperCase();

// console.log(typeof result);
// console.log(result);

let friends = [
    { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
    { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
    { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
    { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
];

// let chainingArr = friends
//     .filter(({ budget }) => budget > 2000)
//     .map(({ name, age, budget }) => {
//         return {
//             userInfo: `Name: ${name}, age: ${age}`,
//             budget: budget,
//         };
//     })
//     .reduce((totalBudget, { budget }) => {
//         return totalBudget + budget;
//     }, 0);

// let chainingArr = friends
//     .filter(({ budget }) => budget > 2000)
//     .map(({ name, age, budget }) => ({
//         userInfo: `Name: ${name}, age: ${age}`,
//         budget: budget,
//     }))
//     .reduce((totalBudget, { budget }) => {
//         return totalBudget + budget;
//     }, 0);

// console.log(chainingArr);

// Reverse String
// 'melon' => 'nolem'

let str = "melon";
// let reversed = str.split("").reduce((rev, char) => char + rev, "");
// console.log(reversed);

// function reverseString(str) {
//     return (reversed = str.split("").reduce((rev, char) => char + rev, ""));
// }
// console.log(reverseString("sara"));
// console.log(reverseString("melon"));

// IIEF
// Функция мгновенного вызова
(function (str) {
    let reversed = str.split("").reduce((rev, char) => char + rev, "");
    console.log(reversed);
})("hello");

// IIEF
//     function (a, b) {
//         console.log(a + b);
//     }
// )(10, 20);
