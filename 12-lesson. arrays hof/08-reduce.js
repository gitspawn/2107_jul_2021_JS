// Formula;
// [].reduce(()=>{}, accumulator)
// [].reduce((acc, elem, index, arr) => {}, acc);

// acc
// ''
// []
// 0,
// 100,
// {}

let numbers = [10, 20, 30, 40, 50];

let total = numbers.reduce((acc, elem, idx, arr) => {
    // console.log("accumulator", acc);
    // console.log("elem", elem);
    // console.log("idx", idx);
    // console.log(`${acc}:  ${elem}`);
    return acc + elem;
}, 550);

console.log(total);

// Get all budgets sum
// let friends = [
//     { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
//     { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
//     { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
//     { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
// ];

// let totalBudget = friends.reduce((total, friend) => {
//     return total + friend.budget;
// }, 0);

// console.log(totalBudget);

// ==========================================
// let cart = [
//     { id: 1, product: "Apple", price: 1200, qty: 2 },
//     { id: 2, product: "Samsung", price: 800, qty: 1 },
//     { id: 3, product: "LG", price: 1000, qty: 3 },
// ];

// 1200 * 2 + 800 + 1000 *3
// let sumInCart = cart.reduce((total, item) => {
//     return total + item.price * item.qty;
// }, 0);

// let sumInCart = cart.reduce((total, { price, qty }) => {
//     return total + price * qty;
// }, 0);

// let cartProductTitles = cart.reduce((title, cartItem) => {
//     title.push(cartItem.product);
//     return title;
// }, []);

// console.log(cartProductTitles);
