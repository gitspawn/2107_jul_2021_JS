// Lexical env

// const x = 10;

// // Global env

// Record: {
//     x: 10
// }

// const foo = function (z) {

//     // Function env

//     Record: {
//         x: null,
//         z: 30
//     }

//     Parent : {Global env}

//     const x = 100;

//     Record: {
//         x: 100,
//     }

//     Parent : {Global env}

//     return x + y + z;

// };

// const y = 20;

// REcord: {
//     x: 10,
//     fn: foo,
//     y = 20
// }

// console.log(foo(30)); // 150



Global env
let a = 100;

Record: {
    a: 100
}

function get() {
    // Inner Env
    
    let a = 200
    Record: {
        a: 200
    }

    console.log(a);
}

get();
