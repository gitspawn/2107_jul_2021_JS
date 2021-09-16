import newsTemplate from "../templates/newsTemplate.hbs";

let root = document.querySelector("#root");

function createMarkup(news) {
    let markup = newsTemplate(news);
    root.insertAdjacentHTML("beforeend", markup);
}

export default createMarkup;
