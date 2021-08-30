let formRef = document.querySelector(".js-feedback-form");
let textAreaREf = document.querySelector("textarea");

getFeedBack();

textAreaREf.addEventListener("input", onTexatAreaHandle);
formRef.addEventListener("submit", onFormSubmit);

function onTexatAreaHandle(event) {
    // console.log(event.target.rows);
    // console.log(event.target.placeholder);
    // console.log(event.target.name);
    // console.log(event.target.value);
    let msg = event.target.value;
    localStorage.setItem("feedbackMessage", msg);
}

function onFormSubmit(event) {
    event.preventDefault();

    // console.log(event.target);

    console.log("Submit");
    let feedbackMessageFromLS = localStorage.getItem("feedbackMessage");
    if (feedbackMessageFromLS) {
        localStorage.removeItem("feedbackMessage");
        textAreaREf.textContent = "";
        event.target.reset();
    }
}

function getFeedBack() {
    let feedbackMessageFromLS = localStorage.getItem("feedbackMessage");
    if (feedbackMessageFromLS) {
        textAreaREf.textContent = feedbackMessageFromLS;
    }
}
