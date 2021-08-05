// Imprative
let fruits = ["apples", "pears", "bananes"];
let fruitsUpdate = [];

for (let i = 0; i < fruits.length; i++) {
    fruitsUpdate.push(fruits[i]);
}

// console.log(fruitsUpdate);
// console.log(fruits);
// console.log(fruits === fruitsUpdate);

// Declarative
let num = [10, 20, 30, 40, 50];
let num2 = [100, 200, 10, 20, 30, 40, 50];
let sortedArr = num2.filter((item) => item > 30);

console.log(sortedArr === num2);
console.log(num2);
