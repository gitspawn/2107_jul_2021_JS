// Прототипы
// Object.create
// Прототипы
// Object.create()

// let arr_1 = [1, 2, 3, 4];
// let arr_2 = ["vova", "sara", "bob", "mike"];
// let arr_3 = [false, true, undefined, null, 0, {}];

// console.log(arr_1);
// console.log(typeof arr_1.toString());
// console.log(arr_2);
// console.log(arr_3);

// __proto__

// let str = new String("Vova");
// console.log(str);

// let objA = {
//     a: 1,
//     b: 2,
// };

// let vova = {
//     name: "Vova",
//     salary: 17500,
//     overTime: 0,
//     paySalary(salary, rate, overTime) {
//         return (this.salary + this.overTime) * this.rate;
//     },
// };

// console.log(vova);

// let objB = {
//     x: 10,
//     y: 20,
// };

// let objA = Object.create(objB);
// objA.a = 1;
// objA.b = 2;
// objA.pizza = "Pizza";

// console.log(objA);

// console.log(objA);

// console.log(objA.a);
// console.log(objA.b);
// console.log(objA.pizza);

// Цепочка прототипов (прототипное наследование)
// console.log(objA.x);
// console.log(objA.y);

// let objC = Object.create(objA);

// console.log(objC);
// console.log(objC.x);

/*
__proto__
    __proto__
        __proto__
            __proto__
                __proto__
*/

// ================================================
// hasOwnProperty

let objB = {
    x: 10,
    y: 20,
};

let objA = Object.create(objB);
objA.a = 1;
objA.b = 2;
objA.pizza = "Pizza";

console.log(objA);

let ownProp = objA.hasOwnProperty("pizza");
ownProp = objA.hasOwnProperty("y");

console.log(ownProp);
