// let fruits = ["apples", "Apples", "Pears", "pears", "bananes", "mango", "kiwi"];

// let result = fruits.sort();
// console.table(result);

// let a = "a";
// let b = "b";
// let A = "A";
// let B = "B";

// a.charCodeAt();

// console.log(a.charCodeAt());
// console.log(b.charCodeAt());
// console.log("c".charCodeAt());
// console.log("d".charCodeAt());
// console.log("e".charCodeAt());

// console.log(A.charCodeAt());
// console.log(B.charCodeAt());
// console.log("C".charCodeAt());
// console.log("D".charCodeAt());
// console.log("D".charCodeAt());

//=================================

let nums = [100, 10, 200, 5, 300, 33, 34, 400, 22, 500];
// let result = nums.sort();
// console.log(result);

// Сортировка по возрастанию
// let result = nums.sort((a, b) => {
//     return a - b;
// });

// let result = nums.sort((a, b) => {
//     return b - a;
// });

let result = nums.sort((a, b) => b - a);
console.log(result);
