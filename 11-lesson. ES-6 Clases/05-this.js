// this - Контекст вызова
// this - это тот кто вызывает функцию
// Не важно где обьявлена ф-ция, важно кто ее вызывает

function sum(a, b) {
    console.log("sum this", this);
    console.log(a + b);
}

// Window
// sum(10, 20);
// window.sum(10, 20);
// this.sum(10, 20);

// let userVova = {
//     name: "Vova",
//     showThis() {
//         console.log(this);
//         console.log(this.name);
//     },
// };

// userVova.showThis();

// let userSara = {
//     name: "Sara",
//     showThis() {
//         // console.log(this);
//         sum(10, 20);
//     },
// };

// userSara.showThis();

// this.showThis();
// showThis();
// window.showThis();

// ==========================

// ES-5 Class
/* function User(name, email) {
    this.name = name;
    this.email = email;

    this.sayHello = function () {
        console.log(`Hello ${this.name}, email ${this.email}`);
    };
}

let vova = new User("Vova", "vova@i.ua");
let sara = new User("Sara", "sara@google.com");

vova.sayHello();
sara.sayHello();
 */

//===================================
// This in event listeners

// let btn = document.querySelector("#btn-basic");
// btn.addEventListener("click", (event) => {
//     // console.log(this);
//     console.log(event.target);
// });

// let btn = document.querySelector("#btn-basic");
// btn.addEventListener("click", function (event) {
//     // console.log(this);
//     console.log(event.target);
// });

// ====================================
// CALL, APPLY, BIND - явное указание контекста

// Call - возвращает и вызывает функцию
// Apply - возвращает и вызывает функцию. Работает с массивом
// Bind - возвращает функцию. Нужно вызвать самому

// let arr = [20, 5, 10];
// // let min = Math.min(...arr);
// // let min = Math.min.apply(Math, arr); // arrays only
// // let min = Math.max.call(Math, 0, 10, 100, 20); //  only
// let minBind = Math.min.bind(Math, 10, 100, 20)();
// // console.log(minBind());
// console.log(minBind);

// let result = arr.min();
// console.log(result);

// =====================================
// let userVova = {
//     name: "Vova",
//     age: 45,
//     showInfo() {
//         console.log(this.name, this.age);
//     },
// };

// let userSara = {
//     name: "Sara",
//     age: 18,
// };

// Bind
// userVova.showInfo.bind(userSara)();

// Call
// userVova.showInfo.call(userSara);

// Apply
// userVova.showInfo.apply(userSara);

// =====================================

// let userVova = {
//     name: "Vova",
//     age: 45,
//     showInfo() {
//         console.log(this.name, this.age);
//     },
// };

// let userSara = {
//     name: "Sara",
//     age: 18,
// };

// let btn = document.querySelector("#btn-basic");
// btn.addEventListener("click", userVova.showInfo.bind(userSara));
// btn.addEventListener("click", userVova.showInfo.bind(userVova));
// Math.min.bind(Math);

// Error
// btn.addEventListener("click", userVova.showInfo());

// ===================================
// ES-5 Constructors
// Всегда ссылается на инстанс

// function Product(brand, price, discount) {
//     this.brand = brand;
//     this.price = price;
//     this.discount = discount;

// this.showInfo = function () {
//     console.log(this);
// };
// }

// Product.prototype.showInfo = function () {
//     console.log(this);
// };

// To instantiate
// let samsung = new Product("Samsung", "9000", 10);
// let apple = new Product("Apple", "35000", 15);

// samsung.showInfo();
// console.log(samsung);

// apple.showInfo();
// console.log(apple);

// ========================================
// ES-5 Classes
// Всегда ссылается на инстанс

class Product {
    constructor(brand, price, discount) {
        this.brand = brand;
        this.price = price;
        this.discount = discount;
    }

    showInfo() {
        console.log(this);
    }

    // showInfo = () => {
    //     console.log(this);
    // };
}

let samsung = new Product("Samsung", "9000", 10);
let apple = new Product("Apple", "35000", 15);

samsung.showInfo();
console.log(samsung);

apple.showInfo();
console.log(apple);
