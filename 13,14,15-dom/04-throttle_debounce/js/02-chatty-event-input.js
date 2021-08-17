/*
 * Input
 */

// _.debounce()
// _.throttle()

{
    /* <input type="text" class="js-input" />
    <p class="js-output"></p> */
}

let inputRef = document.querySelector(".js-input");
let outputRef = document.querySelector(".js-output");

// inputRef.addEventListener("input", (evt) => {
//     console.log(evt.target.value);
// });

function inputCheck(evt) {
    console.log(evt.target.value);

    outputRef.textContent = evt.target.value;
}

inputRef.addEventListener("input", _.debounce(inputCheck, 1500));
