document.body.style.background = "gray";

let items = ["Vodka", "Beer", "Vine", "Shnaps"];

// Selectors
let root = document.querySelector("#root");
let btn = document.querySelector("#openMenu");

// Menu creation
function createLi(text) {
    let li = document.createElement("li");
    let a = document.createElement("a");

    li.classList.add = "menu__item";
    a.classList.add = "link__item";

    a.href = "/" + text.toLowerCase();
    a.textContent = text;

    li.append(a);
    return li;
}

// console.log(createLi("Hello"));
let menu = items.map((menuItem) => {
    return createLi(menuItem);
});

// Crete ul
let list = document.createElement("ul");
list.classList.add("hide");

// Append tpo DOM
list.append(...menu);
root.append(list);
console.log(list);

// Buytton click handler
btn.addEventListener("click", () => {
    list.classList.toggle("show");
});
