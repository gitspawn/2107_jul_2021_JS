// Rest / Spresd

// Rest / Spred operator
// ...

//  ... Rest     =      ... Spred

// ============================
// Spred operator
// let citiesOfUkraine = ["Kyiv", "Lviv", "Odesa", "Dnipro"];
// let citiesOfUerope = ["London", "Paris", "Milan", "Berlin"];

// let cities = citiesOfUerope.concat(citiesOfUkraine);
// console.table(cities);

// let cities = [...citiesOfUkraine, ...citiesOfUerope];
// console.table(cities);
// console.log(cities);
// console.log(cities === citiesOfUkraine);

// let arr = [10, 20, 2, 5, 50];
// let result = Math.min(...arr);
// console.log(result);

// ============================
// Rest operator
// let citiesOfUkraine = ["Kyiv", "Lviv", "Odesa", "Dnipro"];
// AA, BC, BH, AE

// Destructiring
// let [AA, BC, BH, AE] = citiesOfUkraine;

// console.log(AA);
// console.log(BC);
// console.log(BH);
// console.log(AE);

// let citiesOfUerope = ["London", "Paris", "Milan", "Berlin"];
// let [BG, FR, ...others] = citiesOfUerope;
// let [BG, FR, ...rest] = citiesOfUerope;
// console.log(BG);
// console.log(FR);
// console.log(rest);
// console.log(citiesOfUerope);

// let citiesOfUkraine = ["Kyiv", "Lviv", "Odesa", "Dnipro"];
// let [, , BH, ...rest] = citiesOfUkraine;
// console.log(BH);
// console.log(rest);

// ==================
// Magic!

// let a = 100; // 200
// let b = 200; // 100
// [a, b] = [200, 100];

// console.log(a);
// console.log(b);

//========================================
// Objects

// SPRED
// let vova = {
//     name: "Vova",
//     age: 30,
//     status: "Moderator",
// };

// // Simpe
// // let sara = { ...vova };

// // Advansed
// let sara = { ...vova, name: "Sara", age: 25 };
// // console.log(sara === vova);
// // console.log(sara);

// let bob = {
//     ...sara,
//     name: "Bob",
//     status: "Admin",
//     tarif: "Basic",
//     activ: true,
// };

// console.log(bob);

// Destructuring
let vova = {
    name: "Vova",
    age: 30,
    status: "Moderator",
};

// let { status, name, age } = vova;
// console.log(status);
// console.log(age);
// console.log(name);

// let { status, name: userName, age: userAge } = vova;
// console.log(userName);
// console.log(userAge);

let user = {
    firstName: "Sveta",
    lastName: "Connor",
    age: 35,
    email: "sara@i.ua",
    hobbies: ["sport", "beer", "bloging"],
    adress: {
        zip: 12345,
        city: "Kyiv",
        street: "Elm street",
        house: 1428,
    },

    getBirthday() {
        console.log(this.age);
        this.greet();
    },

    greet() {
        console.log(`Hello ${this.firstName}`);
    },
};

// console.log(user.adress.steet);
let { street } = user.adress;
let { street: userStreet } = user.adress;
// console.log(street);
console.log(userStreet);
