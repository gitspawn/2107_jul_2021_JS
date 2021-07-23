// Область видимости

// Global scope
// let num = 200;
// console.log(num);

//============================================
// Function scope
// name = "Vova";

// console.log(name);

// function varFuncScopeTest() {
//     var hello = "Hello world";
//     var hello = "Hello Pizza";
//     console.log(hello);
//     name = "Sara";
//     console.log(name);
// }

// varFuncScopeTest();

// ========================================
// Block level scope
// if(){}
// for(){}
// switch(){}
// function(){}

// {
//     let data = "Hello";
//     console.log(data);
// }

// {
//     // console.log(data);
// }

// if (2 + 2 == 4) {
//     let user = "Sara";
// }

// console.log(user);

// Block level scope
// {}

// {}

// let user = "Sara";

// if (2 + 2 == 4) {
//     let user = "Vova";
//     console.log(user);
// }

{
    let user = "Vova";
}

let user = "Sara";

{
    console.log(user);
}

// let a = 100;

// function getInfo() {
//     const a = 200;
//     console.log(a);
// }

// getInfo();

// let a = 100;

// function getInfo() {
//     let a = 200;
//     console.log("innet in function", a);
// }

// console.log("global", a);

// getInfo();

//=======================================
// Closures
// let a = 100;

// function getInfo() {
//     // let a = 200;
//     // console.log(a);

//     function funcInner() {
//         console.log(a);
//     }

//     funcInner();
// }

// getInfo();

// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }

// for (let i = 50; i > 0; i--) {
//     console.log(i);
// }

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
