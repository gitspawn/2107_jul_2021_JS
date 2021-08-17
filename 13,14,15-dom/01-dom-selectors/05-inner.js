// innerHeight
// innerWidth
// innerText
// innerHtml
// textContent
{
    /* <h1 class="heading main__title" id="title">Main titile</h1> */
}

// let h1Ref = document.querySelector("h1.heading");
// console.log(h1Ref);

// h1Ref.innerText = "Hello Sara";
// console.log(h1Ref.innerText);

// let ul = document.querySelectorAll("ul")[1];
// let li = ul.querySelectorAll("li");
// console.log((li[1].textContent = "Facebook"));

// h1Ref.innerHTML = '<span style="color: magenta">PizZa</span>';

// h1Ref.innerHTML = "";

//====================================
// Add to DOM
// let friends = [
//     { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
//     { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
//     { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
//     { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
// ];

// let html = "";
// friends.forEach((friend) => {
//     html += `<li style="color: blue; list-style: none">${friend.name}</li>`;
// });

// console.log(html);
// let ul = document.querySelectorAll("ul")[1];
// ul.innerHTML = html;

// function createFriends(friends, domElem) {
//     let html = "";
//     friends.forEach((friend) => {
//         html += `<li style="color: blue; list-style: none">${friend.name}</li>`;
//     });

//     domElem.innerHTML = html;
//     return domElem;
// }

// createFriends(friends, ul);

// function createFriends(friends, domElem) {
//     let html = "";
//     friends.forEach((friend) => {
//         html += `<li style="color: blue; list-style: none">${friend.name}</li>`;
//     });

//     domElem.innerHTML = html;
//     return domElem;
// }

// createFriends(friends, ul);

// (function (friends, domElem) {
//     let html = "";
//     friends.forEach((friend) => {
//         html += `<li style="color: green; list-style: none">${friend.name}</li>`;
//     });

//     domElem.innerHTML = html;
//     return domElem;
// })(friends, ul);

// =================================================

// Modern adding do element
let h1Ref = document.querySelector("h1.heading");
// h1Ref.insertAdjacentElement
// h1Ref.insertAdjacentText
// h1Ref.insertAdjacentHTML

// 'beforeBegin', 'afterBegin', 'beforeEnd', or 'afterEnd'.

h1Ref.insertAdjacentHTML(
    "beforeEnd",
    '<span style="color: magenta">PizZa</span>'
);
