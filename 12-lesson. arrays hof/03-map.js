// (elem, idx, arr) => {}

// let fruits = ["pear", "apple", "mango", "kiwi"];

// let newFruitsArr = fruits.map((fruit) => {
//     return fruit.toUpperCase();
// });

// console.log(newFruitsArr === fruits);

// let numbers = [10, 20, 30, 40, 50];
// let resultArr = numbers.map((num) => num + 2);

// console.log(resultArr === numbers);
// console.log(resultArr);

// let numbers = [10, 20, 30, 40, 50];
// let resultArr = numbers.map((num) => {
//     return num;
// });
// // [...numbers];

// console.log(resultArr === numbers);
// console.log(resultArr);

// =========================================

let friends = [
    { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
    { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
    { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
    { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
];

// let budgetsArr = friends.map((friend) => {
//     return friend.budget;
// });

// console.log(budgetsArr);

// let budgetsArr = friends.map((friend) => {
//     return friend.budget + friend.budget * 0.25;
// });
// console.log(budgetsArr);

// let newAges = friends.map((elem) => {
//     return elem.age + 5;
// });
// console.log(newAges);

// ===========================================
// let updateUser = "Sara";
// let updatedFriendsArr = friends.map((friend) => {
//     if (friend.name === updateUser) {
//         // { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
//         return {
//             ...friend,
//             budget: friend.budget + 200,
//             isComplete: (friend.isComplete = true),
//             status: "Admin",
//         };
//     }
//     return friend;
// });

// console.table(updatedFriendsArr);
// ============================================

// let updateUser = "Sara";
// let updatedFriendsArr = friends.map((friend) => {
//     if (friend.name === updateUser) {
//         // { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
//         return {
//             ...friend,
//             budget: friend.budget + 200,
//             isComplete: (friend.isComplete = true),
//             status: "Admin",
//         };
//     }
//     return friend;
// });

// console.table(updatedFriendsArr);
// ============================================

// let vova = {
//     name: "Vova",
//     age: 36,
// };

// let sara = {
//     ...vova,
//     name: "Sara",
// };
