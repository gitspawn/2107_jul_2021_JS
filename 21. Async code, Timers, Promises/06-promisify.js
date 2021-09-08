// Promisify

// let fetchUser = (userName) => {
//     let success = Math.random() > 0.3;
//     let user = { name: userName, age: 30 };
//     let err = "Server Error...";
//     return success ? user : err;
// };

// console.log(fetchUser("Sara"));

// ====================================

// let fetchUser = (userName, onSucces, onError) => {
//     setTimeout(() => {
//         let success = Math.random() > 0.3;
//         if (success) {
//             let user = { name: userName, age: 30 };
//             onSucces(user);
//         } else {
//             let err = "Server Error...";
//             onError(err);
//         }
//     }, 1000);
// };

// function onSucces(user) {
//     console.log(user);
// }

// function onError(err) {
//     console.log(err);
// }

// fetchUser("Vova", onSucces, onError);

// =============================
// Promisify
// let fetchUser = (userName) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let success = Math.random() > 0.3;
//             if (success) {
//                 let user = { name: userName, age: 30 };
//                 resolve(user);
//             } else {
//                 let err = "Server Error...";
//                 reject(err);
//             }
//         }, 1000);
//     });
// };

// console.log(fetchUser);
// fetchUser("Vova")
//     .then((user) => {
//         console.log(user);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// =================================
// Delay
let myDelay = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(delay);
        }, delay);
    });
};

myDelay(1500).then((time) => {
    console.log(time);
});

myDelay(1000).then((time) => {
    console.log(time);
});
