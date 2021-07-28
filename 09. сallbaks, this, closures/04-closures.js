// HOF - Hight order function (функции высшего порядка)
// функция высшего порядка может принимать как параметр другую ф-цию и(или) возвращать другую функцию

// Замыкание - это механизм когда функции доступны внешние перменные

// Замыкание(англ.closure) в программировании — функция первого класса, в теле которой присутствуют ссылки на переменные, объявленные вне тела этой функции в окружающем коде и не являющиеся её параметрами.Говоря другим языком, замыкание — функция, которая ссылается на свободные переменные в своей области видимости.

// function calcFunction(n) {
//     return function () {
//         console.log(100 * n);
//     };
// }

// let calc = calcFunction(10);
// calc = calcFunction(2);
// // console.log(calc);
// console.log(calc());

// =============================================
// function incrementor(n) {
//     return function (i) {
//         return n + i;
//     };
// }

// Карирование
// let one = incrementor(1)(1);
// console.log(one);

// let one = incrementor(1);
// console.log(function (i) {
//     return n + i;
// });

// console.log(one);
// console.log(one(10));

// let ten = incrementor(10)(10);
// let ten = incrementor(10);
// console.log(ten);

// console.log(ten(10));

// ====================================

// https://www.facebook.com/
// https://www.yahoo.com/
// https://www.unian.net/

// function urlGenerator(domainName) {
//     return function (url) {
//         return `https://${url}.${domainName}/`;
//     };
// }

// let facebookUrl = urlGenerator("com");
// let yahooUrl = urlGenerator("com");
// console.log(facebookUrl("facebook"));
// console.log(yahooUrl("yahoo"));

// let unianNet = urlGenerator("net");
// console.log(unianNet("unian"));
// ========================================

function frameworkManager() {
    let fameworks = ["Angular", "Vue"];

    return {
        show: function () {
            console.log(fameworks);
        },
        addFrammework: function (newData) {
            fameworks.push(newData);
        },
    };
}

let manager = frameworkManager();
// console.log(manager);

manager.show();
manager.addFrammework("React");
manager.show();
