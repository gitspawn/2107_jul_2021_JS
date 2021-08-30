let tools = ["hammer", "screwdriver", "knife", "saw", "axe"];

let list = document.querySelector(".list");

// console.log(list);

// 1.
// tools.forEach((tool) => {
//     list.innerHTML += `<li class="list__item">${tool}</li>`;
// });

// 2.
let markup = tools
    .map((tool) => `<li class="list__item">${tool}</li>`)
    .join("");
console.log(typeof markup);

list.insertAdjacentHTML("beforebegin", markup);
