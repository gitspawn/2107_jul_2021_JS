/*
  https://devdocs.io/dom_events/
  Event listeners
  Callback identity
  Event Object
*/

// Event - сигнал от браузера что что-то произошло

{
    /* <button type="button" class="js-target-btn">Main button</button>
<button type="button" class="js-add-listener">Add listeners</button>
<button type="button" class="js-remove-listener">Remove listener</button> */
}

// let mainBtn = document.querySelector(".js-target-btn");
// let addListenerBtn = document.querySelector(".js-add-listener");
// let removeListenerBtn = document.querySelector(".js-remove-listener");

let refs = {
    mainBtn: document.querySelector(".js-target-btn"),
    addListenerBtn: document.querySelector(".js-add-listener"),
    removeListenerBtn: document.querySelector(".js-remove-listener"),
};

// refs.mainBtn.addEventListener("click", () => {
//     console.log("mainBtn");
// });

// refs.mainBtn.addEventListener("click", () => {
//     console.log("Hello");
// });

// refs.mainBtn.addEventListener("click", () => {
//     console.log(2 + 2);
// });

// ========================================
// Ссылочная идентичность коллбеков
/* refs.addListenerBtn.addEventListener("click", () => {
  console.log("Вешаю обработчик");
  refs.mainBtn.addEventListener("click", () => {
      console.log("mainBtn click!!!");
  });
});

refs.removeListenerBtn.addEventListener("click", () => {
  console.log("Снимаю обработчик c mainBtn");
  refs.mainBtn.removeEventListener("click", () => {
      console.log("mainBtn click!!!");
  });
});


 */

// function doSomethingOnClick() {
//     console.log("mainBtn click!!!");
// }

// refs.addListenerBtn.addEventListener("click", () => {
//     console.log("Вешаю обработчик");
//     refs.mainBtn.addEventListener("click", doSomethingOnClick);
// });

// refs.removeListenerBtn.addEventListener("click", () => {
//     console.log("Снимаю обработчик c mainBtn");
//     refs.mainBtn.removeEventListener("click", doSomethingOnClick);
// });

//=============================================
// Event
// target - элемент на кoтором произошло событие
// currentTarget - элемент на кoтором отловили событие

refs.mainBtn.addEventListener("click", (event) => {
    // console.dir(event);
    console.log(event.target);
    // console.log(event.currentTarget);
});

// NEVER USE THIS INSIDE LISTENERS
