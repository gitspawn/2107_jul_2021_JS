// Inharitance
class Calc {}

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

    // Public field
    // getInfo = "Pizza";

    // Public field
    getInfo = () => {
        console.log(`Name: ${this.name}, lastName: ${this.lastName}`);
    };

    sayHello() {
        console.log(`Hello ${this.name} ${this.lastName}`);
    }
}
let vova = new User("Vova", "Smith");
// Public field
console.log(vova.getInfo);

// class Customer extends User {
//     constructor(name, lastName, membership) {
//         super(name, lastName);
//         // super(...args);
//         this.membership = membership;
//     }

// getInfo() {
//     console.log("Sara");
//     super.getInfo(); // вызов родительского метода
// }

// sayHello() {
//     console.log("Sara hello");
// }
// }
// let sara = new Customer("Sara", "Johnson", "Basic");
// console.log(sara);
// console.log(sara);
// sara.getInfo();
// sara.sayHello();
