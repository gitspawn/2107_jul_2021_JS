// Arrays

// let arr = new Array(1, 2, 3, 4, 5);
// console.log(arr);

// []

let user1 = "Vova";
// let user2 = "Sara";
// let user3 = "Bob";

// let users = ["Vova", "Sara", "Bob"];
//               0       1       2
// console.log(users);

let arrData = [
    "Sveta",
    true,
    100,
    user1,
    ["10", 2, false],
    undefined,
    null,
    { mane: "Vova" },
    "hello",
    ,
    50,
    ,
    100,
    "sara",
];

// console.log(arrData);
// console.log(typeof arrData) // object

// console.table(arrData);
// console.log(arrData[0]);
// console.log(arrData[1]);
// console.log(arrData[2]);
// console.log(arrData[3]);
// console.log(arrData[4]);
// console.log(arrData[4][1]);
// console.log(arrData[4][0]);

// arrData = "hello";
// console.log(arrData);

// а если в переменную положить новое значение уже после записи в массив, какое значение переменной будет в массиве?

// arrData[0] = "Sara";
// arrData[1] = false;
// console.log(arrData);
// console.log(arrData[0]);

// =======================================
// Check is Array
// let users = ["Vova", "Sara", "Bob"];
// let users = "Vova";
// let users = 100;
// Array.isArray(); // true /false

// console.log(Array.isArray(users));

// ======================================
// length;
// let users = ["Vova", "Sara", "Bob", "Sveta"];
// console.log(users.length);

// if (users.length) {
//     console.log("Get data frim DB");
// } else {
//     console.log("Fetch error ...");
// }

// =================================
// find last index
// let users = ["Vova", "Sara", "Bob"];
// let result = users[users.length - 1];
// let result = arrData[arrData.length - 1];
// console.log(result);

// ==================================
// Find in arr
// let users = ["Vova", "Sara", "Roger", "Bob", "Mike"];
// // [].indexOf;  // -1 or index
// // let result = users.indexOf("pizza"); // -1
// // let result = users.indexOf("Roger"); // 2

// // [].includes; // true/false
// // let result = users.includes("Roger"); // true
// let result = users.includes("pizza"); // false
// console.log(result);

// ===================================
// Mutate array
// push() - king!!!  - append to end of arr
// pop()
// shift()
// unshift()

// let users = ["Vova", "Sara", "Bob"];

// users.push("Pizza"); // append to end of arr
// users.push("Pizza", "Sveta", "Mike");

// users.pop(); // removes last element

// users.shift(); //  remioves first last element

// users.unshift("Gamburger"); // insert to start of arr

// console.log(users);

// ===================================
// Delete from array
// splice to delete from arr

// let users = ["Vova", "Sara", "Bob"];
// // ["Vova", "Bob"];
// delete users[1];
// delete users[2];
// console.log(users);

// let numbers = [10, 20, 30, 40, 50];

// // let result = numbers.splice(); // []
// // let result = numbers.splice(1); // [20, 30, 40, 50]
// // let result = numbers.splice(2); // [30, 40, 50]
// // let result = numbers.splice(3); // [40, 50]
// // let result = numbers.splice(1, 1); // [20]
// // let result = numbers.splice(1, 2); // [20, 30]
// // let result = numbers.splice(1, 3); // [20, 30, 40]

// console.log("numbers", numbers);
// numbers.splice(3, 1); // [10, 30, 40, 50]

// console.log(numbers);

// ====================================
// slice
// let numbers = [10, 20, 30, 40, 50];
// let result = numbers.slice(); // array copy
// let result = numbers.slice(1); // [20, 30, 40, 50]
// let result = numbers.slice(2); // [30, 40, 50]
// let result = numbers.slice(1, 3);

// console.log(numbers === result);
// console.log(result);

// ====================================
// concat
// let numbers = [10, 20, 30, 40, 50];
// let users = ["Vova", "Sara", "Bob"];

// let resultArr = numbers.concat(users);
// let resultArr = users.concat(numbers);

// Spred operator
// let resultArr = [...users, ...numbers];
// console.log(resultArr);

// =================================
// reverse arr
// let numbers = [10, 20, 30, 40, 50];
// numbers.reverse();
// console.log(numbers);

// ================================
// split().reverse().join() // chaining
// let str = "append to end of arr";
// let result = str.split(" ").reverse().join(" ");
// console.log(result);

// ===================================
// Convert to arr
// let arr = Array.from("qwerty");
// let arr = Array.from(456); // []
// let arr = Array.from("456"); // []
// console.log(arr);
