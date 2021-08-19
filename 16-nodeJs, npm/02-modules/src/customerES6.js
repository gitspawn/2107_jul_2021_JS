// ES6
// class Customer {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHello = () => {
//         console.log(`Hello ${this.name}, you are ${this.age}`);
//     };
// }
// export default Customer;

// =====================================
export class Customer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello = () => {
        console.log(`Hello ${this.name}, you are ${this.age}`);
    };
}

export function sayHello() {
    console.log("Hello world");
}
