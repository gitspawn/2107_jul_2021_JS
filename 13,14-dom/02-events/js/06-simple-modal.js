/*
 * Открыть и закрыть по кнопке
 * Закрыть по клику в бекдроп
 * Закрыть по ESC
 */

let btnRef = document.querySelector("#myModalBtn");
let modalRef = document.querySelector("#myModal");
let closeModalBtn = document.querySelector(".close");
// console.log(closeModalBtn);

btnRef.addEventListener("click", () => {
    modalRef.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    modalRef.style.display = "none";
});

closeModalBtn.addEventListener("mouseover", (event) => {
    event.target.style.cursor = "pointer";
});

window.addEventListener("keydown", onEscClose);
window.addEventListener("click", onBackDropClose);

function onEscClose(event) {
    // console.log(event.code);
    if (event.code === "Escape") {
        // console.log("ESC - Можем закрывать модалку");
        modalRef.style.display = "none";
    }
}

function onBackDropClose(event) {
    if (event.target === modalRef) {
        console.log("Кликнул в бектроп (серое)");
        event.target.style.display = "none";
    }
}

// window.removeEventListener("keydown", onEscClose);
// window.removeEventListener("click", onBackDropClose);
