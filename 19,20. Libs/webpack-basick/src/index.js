import refs from "./js/refs";
import menuData from "./js/menu-data";
import menuTempalate from "./tempaltes/menu.hbs";

// import messages from "./js/pnotify";
import messages from "./js/pnotify";
let { alert, success, error } = messages;

import "./css/styles.css";

let markup = menuTempalate(menuData);
refs.root.innerHTML = markup;

if (2 + 2 !== 4) {
    success({
        text: "Success!!!",
    });
} else {
    error({
        text: "Error!!!",
    });
}

// console.log(Handlebars);
// let templateScript = Handlebars.compile(temlateRef);
// let markup = templateScript(tools);
// divRef.insertAdjacentHTML("beforeend", markup)
