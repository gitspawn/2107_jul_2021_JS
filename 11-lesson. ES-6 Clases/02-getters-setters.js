// getters / setters

class Product {
    constructor(brand, price, discount) {
        this.brand = brand;
        this.price = price;
        this.discount = discount;
    }

    get brandName() {
        return this.brand;
    }

    set brandName(newBrandName) {
        this.brand = newBrandName;
    }

    // getBrand() {
    //     return this.brand;
    // }

    // setBrand(newBrandName) {
    //     this.brand = newBrandName;
    // }
}

// let samsung = new Product("Samsung", "9000", 10);

// Getter
// console.log(samsung.brandName);

// Setter
// samsung.brandName = "Apple";
// console.log(samsung);

// console.log(samsung.getBrand());
// samsung.setBrand("LG");

// console.log(samsung);

// let vova = {
//     name: "Vova",
// };

// vova.name = "Sara";
// console.log(vova.name);

// ========================================

class User {
    constructor(name, lastName, salary) {
        this.name = name;
        this.lastName = lastName;
        this._salary = salary;
    }

    get salary() {
        console.log(this._salary);
    }

    set salary(value) {
        this._salary = value;
    }

    // getInfo() {
    //     console.log(`Name: ${this.name}, lastName: ${this.lastName}`);
    // }

    // sayHello() {
    //     console.log(`Hello ${this.name} ${this.lastName}`);
    // }
}

let vova = new User("Vova", "Smith", 15000);
vova.salary;
vova.salary = 20000;
console.log(vova);

// console.log(vova._salary);
