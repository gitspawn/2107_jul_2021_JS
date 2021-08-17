/**
 * IntersectionObserver
 * Lazy loading
 * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 */

// let box = document.querySelector(".js-observe-box");
// console.log(box);

// let observerInstance = new IntersectionObserver((entries, observer) => {
//     // console.log(entries);
//     // console.log(observer);
//     entries.forEach((entry) => {
//         // console.log(entry);
//         entry.target.textContent = "Is intersecting";
//         // console.log(entry.target.textContent);
//         entry.target.src = entry.target.dataset.src;
//         observer.disconnect();
//     });
// });

// observerInstance.observe(box);

// ==============================================

let options = { rootMargin: "0px 0px -200px 0px" };

if (!!window.IntersectionObserver) {
    let observer = new IntersectionObserver(onObserve, options);
    document.querySelectorAll("img").forEach((img) => {
        observer.observe(img);
    });
} else {
    console.log("IntersectionObserver is not supported");
}

function onObserve(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // console.log("enty.isIntersecting");
            entry.target.textContent = "Is intersecting";
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
        }
    });
}
