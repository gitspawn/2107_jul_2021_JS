let horses = [
    "Mustang",
    "White",
    "Mango",
    "Dark spawn",
    "Eclipse",
    "Lily",
    "England",
];

let getRandomTime = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// console.log(getRandomTime(1, 5));

let run = (horse) => {
    return new Promise((resolve, reject) => {
        let time = getRandomTime(2000, 4000);
        setTimeout(() => {
            resolve({ horse, time });
        }, time);
    });
};

// console.log(horses[0]);

// run(horses[0]).then((horse) => {
//     console.table(horse);
// });

// Promise.all
// Promise.race
let promises = horses.map((horse) => run(horse));
// console.log(promises);

Promise.all(promises).then((horse) => console.table(horse));

Promise.race(promises).then((horse) => console.table(horse));

// AJAX
// Promises
// Async / await
