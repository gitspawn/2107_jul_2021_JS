// Arguments => array like object

// Function declaration
// function getSum(a, b, c, d, e) {
//     // console.log(arguments); есть
//     console.log(this);
//     console.log(a + b + c + d + e);
// }

// Function expretion
// const getSum = function (a, b, c, d, e) {
//     // console.log(arguments); есть
//     console.log(a + b + c + d + e);
// };

// let getSum = (a, b, c, d, e) => {
//     // console.log(arguments); // нету;
//     console.log(this); // нету своего this
//     console.log(a + b + c + d + e);
// };

// =================================
// Array like object - Псевдомассив
// typeof arguments - object

// function getSum(a, b, c) {
// console.log(arguments);
// console.log(arguments[0]);
// console.log(typeof arguments);
// console.log(Array.isArray(arguments));
// console.log(Array.from(arguments));

// Spred Oparor

// let argsArr = [...arguments];
// console.log(Array.isArray(argsArr));
// console.log(a + b + c + d + e);
//     console.log(a, b, c);
// }
// getSum(10, 20, 30, 40, 50, 60, "Vova");
