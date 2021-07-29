// Incapsulation
// Object.seal(objA);
// Object.freeze(ObjB);

// window.prototype.alert = null;
// alert("Hello");

// window.console = null;
// window.console.prototype.log = null;

// Array.prototype.pizza = function () {
//     console.log("pizza");
// };

// let objA = {
//     a: 1,
//     b: 2,
// };

// Object.freeze(objA);
// Object.seal(objA);
// objA.c = 3;

// console.log(objA);

// Object.freeze(Window);
Object.seal(Window);

Window.prototype.pizza = function () {
    console.log("Pizza ");
};

window.pizza();
