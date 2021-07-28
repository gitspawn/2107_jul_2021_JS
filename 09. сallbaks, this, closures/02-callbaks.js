// HOF - Hight order function (функции высшего порядка)
// функция высшего порядка может принимать как параметр другую ф-цию и(или) возвращать другую функцию

// Функция обратного вызова - ее вызыват интпретатор в нужный момент
// Callback function

// let fn = (a) => {
//     a();
// };

// // Callback Function
// let pizza = () => {
//     console.log("Callback Pizza function");
// };

// fn(pizza);

// ===============================
// Calculator
// let sum = (a, b) => a + b;
// let sub = (a, b) => a - b;
// let div = (a, b) => a / b;
// let mult = (a, b) => a * b;

// function calculator(a, b, callbackFunction) {
//     return callbackFunction(a, b);
// }

// let result = calculator(5, 10, sum);
// result = calculator(5, 10, mult);

// console.log(result);

//

// ======================================
// Add Callback
let btn = document.querySelector("#btn-basic");
// console.log(btn);

// btn.addEventListener("click", btnClickHandler);

// function btnClickHandler() {
//     console.log("Button click!");
// }

// btn.addEventListener("click", function () {
//     console.log("Button click!");
// });

btn.addEventListener("click", () => {
    console.log("Button click!");
});
