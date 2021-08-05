// Если не находить, то возвращает []

let friends = [
    { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
    { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
    { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
    { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
];

// let filtered = friends.filter((friend) => {
//     return friend.budget === 15000;
// });

// let filtered = friends.filter((friend) => {
//     return friend.budget > 500;
// });

// let filtered = friends.filter(({ budget }) => budget > 500);

// Satanizm
// let filtered = friends.filter((friend) => {
//     return friend.isComplete === true;
// });

// let filtered = friends.filter((friend) => {
//     return friend.isComplete;
// });

// let filtered = friends.filter(({ isComplete }) => isComplete);
// ============================================================
// Search
// Все кроме Сары
// let userToFind = "Sara";
// let filtered = friends.filter((friend) => {
//     return friend.name !== userToFind;
// });

// Найти Сару
// let userToFind = "Sara";
// let filtered = friends.filter(({ name }) => name === userToFind);

// console.log(filtered);
