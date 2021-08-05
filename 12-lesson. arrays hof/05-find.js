// Если не находит, то возвращает undefined
let friends = [
    { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
    { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
    { id: 3, name: "Bob", age: 30, budget: 300, isComplete: true },
    { id: 4, name: "Mike", age: 18, budget: 200, isComplete: false },
];

let userName = "Sveta";
let fundInArr = friends.find((friend) => {
    return friend.name === userName;
});

console.log(fundInArr);

if (fundInArr) {
    console.log("Нашли");
} else {
    console.log(" Не нашли");
}
