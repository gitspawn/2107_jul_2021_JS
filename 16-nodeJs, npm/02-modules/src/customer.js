//CommonJS
class Customer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello = () => {
        console.log(`Hello ${this.name}, you are ${this.age}`);
    };
}

module.exports = Customer;
