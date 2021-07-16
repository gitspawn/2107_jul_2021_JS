// Array looping

// let users = ["Vova", "Sveta", "Roger", "Bob", "Mike"];
// let len = users.length; // 5

// users[0];
// users[1];
// users[2];

// for (let i = 0; i < len; i += 1) {
//     console.log(users[i]);
// }

// Old School
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// for (let i = 0; i < len; i += 1) {
//     // console.log(users[i].toUpperCase());
//     console.log(users[i].length);
// }

// let numbers = [10, 20, 30, 40, 50];
// let len = numbers.length;

// for (let i = 0; i < len; i += 1) {
//     console.log(numbers[i] * 5);
// }

// =====================================
// for ... of
// let users = ["Vova", "Sveta", "Roger", "Bob", "Mike"];

// for (let user of users) {
//     console.log(user);
// }

// ======================================
// Find in arr
// let fruits = ["apples", "banana", "melon", "kiwi", "mango"];
// let fruitToFind = "pear";

// for (let fruit of fruits) {
//     if (fruits.includes(fruitToFind)) {
//         console.log("Нашли!");
//     } else {
//         console.log("Не нашли!");
//     }
// }

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === fruitToFind) {
//         console.log("Нашли!");
//         break;
//     }
// }

// ==========================================
// Array copy
// let newArr = [];
// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] !== fruitToFind) {
//         newArr[i] = fruits[i];
//     }
// }
// console.log(newArr);

// ====================================
// Finf and add to arr
// let fruits = ["apples", "banana", "melon", "kiwi", "mango"];
// let fruitToFind = "pear";

// let newArr = [];
// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] !== fruitToFind) {
//         newArr[i] = fruits[i];
//         newArr.push(fruitToFind);
//     }
// }
// console.log(newArr);

// if (!fruits.includes(fruitToFind)) {
//     fruits.push(fruitToFind);
// }
// console.log(fruits);
