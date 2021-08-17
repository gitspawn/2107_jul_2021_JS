/**
 * keydown, keypress, keyup
 * keypress - only for symbol buttons (doesn't work for - ctrl, shift, alt, esc, and so on)
 * keydown - all buttons: symbol buttons, ctrl, shift, alt and so on
 *
 * event.key - генерит буквально сивол
 * event.code - физически нажатая клавиша
 *
 * https://keycode.info/
 */

// window.addEventListener("keypress", (event) => {
//     // console.log("key", event.key);
//     console.log("code", event.code);
// });

// window.addEventListener("keydown", (event) => {
//     // console.log("key", event.key);
//     console.log("code", event.code);
// });

//=============================================

let output = document.querySelector(".js-output");
// console.log(output);
let clearBtn = document.querySelector(".js-clear");

window.addEventListener("keydown", keyListen);

clearBtn.addEventListener("click", () => {
    output.textContent = "";
    window.removeEventListener("keydown", keyListen);
});

function keyListen(event) {
    output.textContent += event.key;
}
