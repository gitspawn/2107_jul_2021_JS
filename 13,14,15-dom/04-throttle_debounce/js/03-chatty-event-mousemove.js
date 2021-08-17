/*
 * Mousemove
 */

// _.debounce()
// _.throttle()

// let parRef = document.querySelector(".js-coords");
let parRef = document.querySelector(".long-text");

// console.log(parRef);

function onMouseMove(evt) {
    console.log(`screenX: ${evt.screenX}, screenY: ${evt.screenY}`);
}

// parRef.addEventListener("mousemove", onMouseMove);
// parRef.addEventListener("mousemove", _.throttle(onMouseMove, 2000));
parRef.addEventListener("mousemove", _.debounce(onMouseMove, 2000));
