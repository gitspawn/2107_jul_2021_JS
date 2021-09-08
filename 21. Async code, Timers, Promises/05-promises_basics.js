// Promises - они следят за состоянием асинхронной операции

// setInterval(() => {}, interval);
// setTimeout(() => {}, timeout);

// let promice = new Promise((resolve, reject) => {
// resolve("Vova");
// resolve([1, 2, 3, 4]);
// let user = {
//     name: "sara",
//     age: 25,
// };
// resolve(user);

// reject("Server Error");
// });
// console.log(promice);

// ===============================
// Promice methods
// then: ƒ then()
// catch: ƒ catch()
// finally: ƒ finally()

// let promise = new Promise((resolve, reject) => {
//     // resolve([1, 2, 3, 4]);
//     setTimeout(() => {
//         resolve([1, 2, 3, 4]);
//     }, 3000);
// });

// promise.then((data) => {
//     console.log(data);
// });

// promise.then((data) => console.log(data));

//==================================
// let promice = new Promise((resolve, reject) => {
//     let succes = Math.random() > 0.3;
//     setTimeout(() => {
//         if (succes) {
//             resolve({
//                 name: "sara",
//                 age: 25,
//             });
//         } else {
//             reject("Server Error");
//         }
//     }, 1000);
// });

// promice
//     .then((user) => {
//         console.log(user);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("From finaly");
//     });

// =================================

// =====================================

//==================================

// Доступ к данным только внутри промиса
// let userVova = "vova";
// let promice = new Promise((resolve, reject) => {
//     let succes = Math.random() > 0.3;
//     setTimeout(() => {
//         if (succes) {
//             resolve({
//                 name: "sara",
//                 age: 25,
//             });
//         } else {
//             reject("Server Error");
//         }
//     }, 1000);
// });

// promice
//     .then((user) => {
//         // console.log(user);
//         userVova = user;
//         console.log(userVova);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// console.log(userVova);
// =================================

// =====================================

// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// ======================================
// Chaining
// promice
//     .then()
//     .then()
//     .then()
//     .then()
//     .then()
//     .then()
//     .then()
//     .catch()
//     .finaly()

let promise = new Promise((resolve, reject) => {
    resolve(10);
    // reject("Calculation errror");
});

promise
    .then((value) => {
        console.log(value);
        return value * 2;
    })
    .then((value) => {
        console.log(value);
        return value * 3;
    })
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    });
