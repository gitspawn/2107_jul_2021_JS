// ES-5 Constructors or Class
// function Number() {  }

// ======================================
// Кастомные
// Pizza;
// User;
// Qwe;
// Product

// =================================
// function Product() {
//     // 1. {}
//     // 2. Привязал this
//     // 3. Вернул созданный объект
// }

// // Созадем инстанс

// let samsung = new Product();
// console.log(samsung);

// ============================
function Product(brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount;

    this.showInfo = function () {
        console.log(`Brand: ${this.brand} Price: ${this.price}`);
    };

    this.getDiscountPrice = function () {
        let finalPrice = (this.price * (100 - this.discount)) / 100;

        console.log(finalPrice);
    };
}

// To instantiate
let samsung = new Product("Samsung", "9000", 10);
let apple = new Product("Apple", "35000", 15);
console.log(samsung);
console.log(apple);

// samsung.showInfo();
// apple.showInfo();

// samsung.getDiscountPrice();
// apple.getDiscountPrice();

// ============================
// Instansof

// console.log(samsung instanceof Product);
// console.log(apple instanceof String);
// console.log(apple instanceof Product);

// let str = "Vova";
// let str = new String("Vova");

// console.log(str instanceof String);

// ============================
// Add to prototype
//  Remove from to prototype

// let arr_1 = [1, 2, 3, 4];
// let arr_2 = ["vava", "sara", "mike"];

// arr_1.pizza = function () {
//     console.log("pizza");
// };

// Array.prototype.pizza = function () {
//     console.log("pizza");
// };

// Array.prototype.push = null;

// arr_1.pizza();
// arr_2.pizza();

// console.log(arr_1);
// console.log(arr_2);

// arr_1.push(5);

// window.prototype.alert = null;
// alert("Hello");
// window.alert("Hello");
