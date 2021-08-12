/*
 Event Submit
 Default browser actions
 Elements property
 Class FormData() - https://developer.mozilla.org/ru/docs/Web/API/FormData
*/

// ==================
// event.preventDefault() - discard default behaviour
// ==================

// let aRef = document.querySelector("a");
// aRef.addEventListener("click", (event) => {
//     event.preventDefault();
// });
// console.log(aRef);

// ?name=wqeqwe&email=vova%40x.ua&password=cPznJGcVZ9umV%408&subscription=basic

let formRef = document.querySelector(".js-register-form");

formRef.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(event);
    // console.log("Form submit");

    // let inputName = document.querySelector('input[name="name"]');
    // console.log(inputName);
    // console.log(inputName.type);
    // console.log(inputName.name);
    // console.log(inputName.placeholder);
    // console.log(inputName.autocomplete);
    // console.log(inputName.value);

    // let inputEmail = document.querySelector('input[name="email"]');
    // console.log(inputEmail);

    //==============================
    // Elements
    // console.log(event.target);
    // let formRef = event.target;
    // console.log(formRef.elements);
    // console.log(formRef.elements.name.value);
    // console.log(formRef.elements.email.value);
    // console.log(formRef.elements.password.value);
    // console.log(formRef.elements.subscription.value);
    // ================================

    // FormData
    let formRef = event.target;
    let formData = new FormData(formRef);
    // console.log(formData);

    let sendedFormData = {};
    formData.forEach((value, key) => {
        // console.log("value", value);
        // console.log("key", key);
        sendedFormData[key] = value;
    });

    console.log(sendedFormData);
});
