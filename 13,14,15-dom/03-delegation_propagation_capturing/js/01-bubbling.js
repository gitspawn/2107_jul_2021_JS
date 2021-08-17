/*
 * Event Bubbling
 * event.target - элемент на котором произошло событие
 * event.currentTarget - элемент на котором ловим (слушаем) событие
 * event.stopPropagation() - остановить всплытие событий
 */

let refs = {
    parent: document.querySelector("#parent"),
    child: document.querySelector("#child"),
    innerChild: document.querySelector("#inner-child"),
};

// console.log(refs);

refs.parent.addEventListener("click", (event) => {
    // console.log("parent click");
    console.log("event target", event.target);
    console.log("current target", event.currentTarget);
});

refs.child.addEventListener("click", (event) => {
    // console.log("child click");
    console.log("event target", event.target);
    console.log("current target", event.currentTarget);
    event.stopPropagation(); // остановить всплытие событий
});

refs.innerChild.addEventListener("click", (event) => {
    // console.log("innerChild click");
    console.log("event target", event.target);
    console.log("current target", event.currentTarget);
});

window.addEventListener("click", (event) => {
    // console.log("innerChild click");
    console.log("event target", event.target);
    console.log("current target", event.currentTarget);
});
