// String, Number, Boolean - type hinting, casting

// ---
// 1. String when conwerts to string
// let someValue = true;
// console.log(typeof someValue); // boolean

// someValue = String(someValue); // string "true"
// console.log(typeof someValue); // string
// console.log(String(null)); // null
// console.log(String(undefined)); // null
// console.log(String(0)); 0
// console.log(typeof String(0)); // string
// console.log(typeof String([1, 2, 3, 4, 5])); // string
// string + number // string
// '5' + 6 // string '56'
// [1,3,5].toString() // string '1,2,4'
// true + hello // string "truehello"
// 50 / 'hello' // NaN

// ---
// 2. When converts to number
// NaN, Infinity
// console.log(typeof ("6" / "2")); // number 3
// console.log(typeof ("6" / "20px")); // number 3
// console.log((6 / "2px")); // NaN
// console.log(typeof (6 / "2px")); // number

// let sum = 1000;
// console.log(Number.isNaN(1000)); // false
// console.log(Number.isNaN(6 / "2px")); // true
// console.log(Number.isFinite(6 / "2px")); // false
// console.log('Is finite', Number.isFinite(231534534525453534552452452554)); // true
//
// console.log(Number(undefined)); // NaN
// console.log(Number(null)); // 0
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number('vova')); // NaN
// console.log(Number('400vova')); // NaN
// console.log(Number('400')); // number
// console.log(typeof Number(('        400  '))); // number trims all whitespaces
// console.logNumber('5.2'); // 5
// console.log(Number.parseInt('100')) // 100
// console.log(Number.parseInt(100.32)) // 100
// console.log(Number.parseFloat('100.32')) //100.32
// null / undefined // NaN
// null + undefined // NaN
// undefined + 2 // NaN
// undefined / 2 // NaN

// ---
// 3. Number when converts to Boolean
// console.log(Boolean(1)); // true
// console.log(Boolean(400)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean('0')); // true
// console.log(Boolean('')); // empty string false
// console.log(Boolean(' ')); // empty string with whitespace true
// 0, null, undefined, NaN, "" // false

// 4. String to boolen
// ! logical NOT
// console.log('Hello!') // stuing
// console.log(!'Hello!') // Boolean false
// console.log(!!'Hello!') // Boolean true

//---
// Edge cases
// ('' == []) // true
// ('' == {}) // false
// (false == []) // true
// (false == '') // true
// (0 == null) // false

// null === undefined // true
// null == undefined // true
// Boolean(undefined) // false
// Boolean(null) //false
// false == false // true

// --- Objects
// Boolean({}) // true
// Boolean({age: 30, name: 'Vova'}) // true
// Boolean([]) // true
// Boolean(['aple','ogane']) // true

// !!!
// null and undefined has no methods!
