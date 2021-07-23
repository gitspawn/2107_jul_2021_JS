// for...in
// Object.keys
// Object.values
// Object.entries
// Array for...of

// Obj looping
// ==================================
// for...in - only for objects

// 65
// let likes = {
//     good: 5,
//     neutral: 2,
//     bad: 3,
// };

// for (let like in likes) {
// console.log(like); // key
// }

// let total = 0;
// for (let key in likes) {
//     // console.log(likes[key]); // valuess

//     total += likes[key];
// }
// console.log(total);

// function getLikesSum(obj) {
//     let total = 0;
//     for (let key in obj) {
//         total += obj[key];
//     }
//     return total;
// }

// let result = getLikesSum(likes);
// console.log(result);

//============================
// Object.keys
// let likes = {
//     good: 7,
//     neutral: 2,
//     bad: 3,
// };

// let keys = Object.keys(likes);
// // console.log(keys);

// let total = 0;
// for (let key of keys) {
//     total += likes[key];
// }

// console.log(total);

// Object.values
// let values = Object.values(likes);
// console.log(values);

// let total = 0;
// for (let value of values) {
//     total += value;
// }
// console.log(total);

// Object.entries
// let entries = Object.entries(likes);
// console.log(entries[1][1]);

// let total = 0;
// for (let [key, value] of entries) {
//     console.log(key, value);
//     total += value;
// }

// console.log(total);

// ===================================

let friends = [
    { id: "1", name: "Vova", age: 20 },
    { id: "2", name: "Sara", age: 17 },
    { id: "3", name: "Bob", age: 35 },
];

// console.dir(friends);

// for (let friend of friends) {
//     // console.log(friend);
//     // console.log(friend.name);
//     // console.log(friend.name);
//     // console.log(item.age);
//     // console.log(pizza.id);
// }
