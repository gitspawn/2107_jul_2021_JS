// Примитивы
// String
// Number
// Boolean

// Ссылочные типы
// - Oblect
// - Array;

// Примитивы
// let friend = "Vova";
// let girlFriend = "Sara";

// girlFriend = friend;

// console.log(friend);
// console.log(girlFriend);

// console.log(friend === girlFriend);

// let num_1 = 100;
// let num_2 = 200;

// num_1 = num_2;
// console.log(num_1);
// console.log(num_2);
// console.log(num_1 === num_2);

// Ссылочные типы
let a = [1, 2, 3, 4];
let b = a;

b.push(5);

let c = [1, 2, 3, 4, 5];

console.log("a", a);
console.log("b", b);
console.log("c", c);

console.log(a === b);
console.log(a === c);
console.log(b === c);
