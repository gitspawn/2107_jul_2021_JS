let refs = {
    tags: document.querySelector(".js-tags"),
    activTag: document.querySelector(".js-active-tag"),
};

refs.tags.addEventListener("click", onTagsClick);

function onTagsClick(event) {
    // console.log("event target", event.target);
    // console.log("current target", event.currentTarget);
    // console.log(event.target.nodeName);
    if (event.target.nodeName !== "BUTTON") {
        return;
    }
    console.log(event.target);
    let currentActiveTag =
        event.currentTarget.querySelector(".tags__btn--active");

    if (currentActiveTag) {
        currentActiveTag.classList.remove("tags__btn--active");
    }

    let nextActiveTag = event.target;
    nextActiveTag.classList.add("tags__btn--active");

    // Data atributes
    // console.log(event.target.dataset.qwe);
    // console.log(event.target.dataset.pizza);
    // console.log(event.target.dataset.value);

    refs.activTag.innerText = nextActiveTag.dataset.value;
}
