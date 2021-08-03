// ES6

// class Product {
//     constructor(brand, price, discount) {
//         this.brand = brand;
//         this.price = price;
//         this.discount = discount;
//     }

//     showInfo() {
//         console.log(`Brand: ${this.brand} Price: ${this.price}`);
//     }

//     getDiscountPrice() {
//         let finalPrice = (this.price * (100 - this.discount)) / 100;
//         console.log(finalPrice);
//     }
// }

// let samsung = new Product("Samsung", "9000", 10);
// console.log(samsung);

// =============================================
// Public fields привязка this
// class Product {
//     constructor(brand, price, discount) {
//         this.brand = brand;
//         this.price = price;
//         this.discount = discount;
//     }

//     showInfo = () => {
//         console.log(`Brand: ${this.brand} Price: ${this.price}`);
//     };

//     getDiscountPrice = () => {
//         let finalPrice = (this.price * (100 - this.discount)) / 100;
//         console.log(finalPrice);
//     };
// }

// let samsung = new Product("Samsung", "9000", 10);
// console.log(samsung);
// =============================================

class User {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    // getInfo() {
    //     console.log(`Name: ${this.name}, lastName: ${this.lastName}`);
    // }

    // sayHello() {
    //     console.log(`Hello ${this.name} ${this.lastName}`);
    // }

    getInfo = () => {
        console.log(`Name: ${this.name}, lastName: ${this.lastName}`);
    };

    sayHello = () => {
        console.log(`Hello ${this.name} ${this.lastName}`);
    };
}

let vova = new User("Vova", "Smith");

console.log(vova.name);
console.log(vova.lastName);
vova.getInfo();
vova.sayHello();
