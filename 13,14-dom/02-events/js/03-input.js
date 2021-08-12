/**
 * 
 * Change Event
 * Input Event
 *
 * Focus Event
 * Blur Event
 *

 * Checkboxes
 * Checked property
 * */

let inputRef = document.querySelector('input[type="text"]');
let licenceRef = document.querySelector(".js-license");
let btnRef = document.querySelector(".js-button");
let nameRef = document.querySelector(".js-button > span");

// console.log(inputRef);
// console.log(licenceRef);
// console.log(btnRef);
// console.log(nameRef);

// Input event
// inputRef.addEventListener("input", (event) => {
//     console.log(event.target.value);
// });

//  Change Event
// inputRef.addEventListener("change", (event) => {
//     console.log(event.target.value);
// });

// Check box
// licenceRef.addEventListener("change", (event) => {
//     console.log(event.target.checked); // true/false
// });

// licenceRef.addEventListener("change", (event) => {
//     btnRef.disabled = !event.target.checked;
// });

// inputRef.addEventListener("input", (event) => {
//     // console.log(event.target.value);
//     let inputValue = event.target.value;
//     licenceRef.addEventListener("change", (event) => {
//         btnRef.disabled = !event.target.checked;
//         nameRef.innerText = inputValue;
//     });
// });

// Focus
// inputRef.addEventListener("focus", (event) => {
//     console.log("In focus");
//     event.target.style.border = "3px solid green";
//     event.target.style.background = "gray";
// });

// // Blur
// inputRef.addEventListener("blur", (event) => {
//     console.log("Blur");
//     event.target.style.border = "3px solid blue";
//     event.target.style.background = "yellow";
// });
