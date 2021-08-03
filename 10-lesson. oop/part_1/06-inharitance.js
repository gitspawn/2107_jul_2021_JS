// ES5 Inharitance - наследование

function Product(brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount;
}

Product.prototype.showInfo = function () {
    console.log(`Brand: ${this.brand} Price: ${this.price}`);
};

Product.prototype.getDiscountPrice = function () {
    let finalPrice = (this.price * (100 - this.discount)) / 100;

    console.log(finalPrice);
};

// To instantiate
let samsung = new Product("Samsung", "9000", 10);
let apple = new Product("Apple", "35000", 15);
console.log(samsung);
console.log(apple);

// ================================================

// let vova = {
//     name: "Vova",
//     salary: 17500,
//     overTime: 0,
//     paySalary(salary, rate, overTime) {
//         return (this.salary + this.overTime) * this.rate;
//     },
// };

// function User(name, salary, overTime) {
//     this.name = name;
//     this.salary = salary;
//     this.overTime = overTime;
// }

// User.prototype.paySalary = function () {
//     return (this.salary + this.overTime) * this.rate;
// };

// let vova = new User("Vova", 15000, 10);
// let sara = new User("Sara", 35000, 40);

// console.log(vova instanceof User);
// console.log(sara);

// ================================================
// ingaritance

function User(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

User.prototype.getInfo = function () {
    console.log(`Name: ${this.name}, lastName: ${this.lastName}`);
};

User.prototype.sayHello = function () {
    console.log(`Hello ${this.name} ${this.lastName}`);
};

let vova = new User("Vova", "Smith");
// console.log(vova);

// Функциональное наследование (наследую пропы, свойства)
function Customer(name, lastName, membership) {
    User.apply(this, arguments);
    this.membership = membership;
}

// Прототипное наследование
//1. Передать прототип
Customer.prototype = Object.create(User.prototype);
//2. Передать конструктор
Customer.prototype.constructor = Customer;

//3.  Добавить метод если надо
Customer.prototype.getaAllData = function () {
    console.log(
        `Name: ${this.name}, lastName: ${this.lastName}, membership: ${this.membership}`
    );
};

//4. Replace parent Method
Customer.prototype.sayHello = function () {
    console.log(`Customer ${this.name} ${this.lastName}`);
};

let sara = new Customer("Sara", "Johnson", "Basic");
// console.log(sara);

// Methods from Parent - User
// sara.getInfo();
// sara.sayHello();

// sara.getaAllData();
// sara.sayHello();
