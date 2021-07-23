// Return

// function mult(a, b) {
//     console.log("Start");
//     console.log(a * b);
//     console.log("End");

//     // return udefined; // default value это сам ставит интерпритатор
// }

// mult(10, 20);

// function mult(a, b) {
//     console.log(a * b);
//     return a * b
// }

// let result = mult(10, 20);
// console.log(result);

// let checkIsAdmin = function (name) {
//     if (name === "Vova") {
//         return true;
//     } else {
//         return false;
//     }

//     // return undefined;
// };

// console.log(checkIsAdmin("Mike"));

// function leapYaer(year) {
//     if (year % 4 === 0) {
//         return "Высокосный год!";
//     } else {
//         return "Не высокосный год!";
//     }
// }

// function leapYaer(year) {
//     return year % 4 === 0 ? "Высокосный год!" : "Не высокосный год!";
// }

// let result = leapYaer(2001);
// console.log(result);

funcA();

function funcA() {
    console.log("Start A");

    funcB();
    console.log("End A");
}

function funcB() {
    console.log("Func B execution");

    // return 5 + 10;

    // console.log("Hello");
    // console.log("Hello");
    // console.log("Hello");
    // console.log("Hello");
    // console.log("Hello");
    // console.log("Hello");
    // console.log("Hello");
}

// funcB();
funcA();
