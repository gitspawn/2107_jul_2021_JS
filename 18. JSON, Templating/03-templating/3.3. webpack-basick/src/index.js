import refs from "./js/refs";
import menuData from "./js/menu-data";
import menuTempalate from "./tempaltes/menu.hbs";

import "./css/styles.css";

let markup = menuTempalate(menuData);
refs.root.innerHTML = markup;

// console.log(Handlebars);
// let templateScript = Handlebars.compile(temlateRef);
// let markup = templateScript(tools);
// divRef.insertAdjacentHTML("beforeend", markup)
