let refs = {
    gallery: document.querySelector(".js-gallery"),
    largeImage: document.querySelector(".js-large-image"),
};

refs.gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();
    // console.log("onGalleryClick");
    // console.log("event target", event.target);
    // console.log("current target", event.currentTarget);

    console.log(event.target.nodeName);

    if (event.target.nodeName !== "IMG") {
        return;
    }

    let imageRef = event.target;

    // Data atributes
    // event.target.dataset.pizza;
    // event.target.dataset.source;

    // console.log(imageRef.dataset.source);

    // refs.largeImage.src = imageRef.dataset.source;

    setLarge(imageRef.dataset.source);
}

function setLarge(url) {
    refs.largeImage.src = url;
}
