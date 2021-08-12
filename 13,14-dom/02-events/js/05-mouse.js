/**
 * mouseenter и mouseleave
 * mouseover и mouseout
 * mousemove (chatty event)
 * Mouse coordinates: https://nerdparadise.com/programming/javascriptmouseposition
 */

// <div class="box js-box">
//     <div class="inner-box"></div>
// </div>;

let boxRef = document.querySelector(".js-box");

boxRef.addEventListener("mouseenter", (event) => {
    console.log("mouseenter");
    // console.log(event);
});

boxRef.addEventListener("mouseleave", (event) => {
    console.log("mouseleave");
    // console.log(event);
});

// boxRef.addEventListener("mouseover", (event) => {
//     console.log("mouseover");
//     // console.log(event);
// });

// boxRef.addEventListener("mouseout", (event) => {
//     console.log("mouseout");
//     // console.log(event);
// });

// ==============================================================
// Chatty event
// boxRef.addEventListener("mousemove", (event) => {
//     console.log("mousemove");
//     // console.log(event);
// });

// =================================
// Hover
boxRef.addEventListener("mouseenter", (event) => {
    event.target.classList.add("box--active");
});

boxRef.addEventListener("mouseleave", (event) => {
    event.target.classList.remove("box--active");
});
