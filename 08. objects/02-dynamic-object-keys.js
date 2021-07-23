let cat = {
    name: "Tom",
    age: 8,
    color: "black",
};

let mouse = {
    name: "Jerry",
    age: 1,
    color: "brown",
};

// console.log(cat.color);
// console.log(mouse.name);
// mouse.name = "Sugar";
// console.log(mouse);

// cat.age -- 99.99999999999999999
// cat['age']

// console.log(cat["age"]);

function inputHandler(value, name) {
    let obj = {
        [name]: value,
    };
    return obj;
}

let passObj = inputHandler("Pass123456", "password");
let emailObj = inputHandler("sara@i.ua", "email");
let loginObj = inputHandler("Sarochka2005", "login");

// console.log(passObj);
// console.log(emailObj);
// console.log(loginObj);

// const user = {
//     login: loginObj,
//     email: emailObj,
//     password: passObj,
// };

// const user = {
//     login: "login",
//     email: "email",
//     password: "password",
// };

// console.log(user);

// ============================================
let state = ["USA", "China", "Russia", "India", "Ukraune"];
let vaccine = [
    "Phizer",
    "Corovac",
    "Sputnic V",
    "Covishield",
    "Kozac-2021",
    "Moderna",
];

function createVacBank(arrKeys, arrValues) {
    let bank = {};

    for (let i = 0; i < arrKeys.length; i++) {
        bank[arrKeys[i]] = arrValues[i];
    }

    return bank;
}

let worldBankOfVaccines = createVacBank(state, vaccine);

console.log(worldBankOfVaccines);
