// Localstorage

// CRUD

// Add
// Get
// Remove
// Clear

// console.log(window.localStorage);
// setItem();
// getItem();
// removeItem();
// clear();

let vova = {
    name: "Vova",
    age: 30,

    convertToString() {
        return `name: ${name}, age: ${name}`;
    },
};

let cartItems = [
    { name: "apple", price: 35000 },
    { name: "samsung", price: 25000 },
];

// ADD
let user = localStorage.setItem("user", JSON.stringify(vova));
let cart = localStorage.setItem("cart", JSON.stringify(cartItems));

// GET
// If can't find return NULL
// let pizzaFromLocalStorage = localStorage.getItem("pizza");
// console.log(pizzaFromLocalStorage);

// let userFromLS = localStorage.getItem("user");
// if (userFromLS) {
//     let parsedUser = JSON.parse(userFromLS);
//     console.log(parsedUser);
// }

// let cartFromLS = localStorage.getItem("cart");
// if (cartFromLS) {
//     let parsedCart = JSON.parse(cartFromLS);
//     console.log(parsedCart);
// }

// Remove
// let cartFromLS = localStorage.getItem("cart");
// if (cartFromLS) {
//     localStorage.removeItem("cart");
// }

// Clear;
// localStorage.clear();

// Session storage
// sessionStorage.setItem()
// sessionStorage.getItem()
// sessionStorage.removeItem()
// sessionStorage.clear()
