// nodeType
// nodeName

// parents;
// children;
// siblings - братсестер;

// let ul = document.querySelectorAll("ul")[2];
// console.log(ul);
// console.log(ul.nodeName);

// ===========================================
// Ussles
// console.log(ul.childNodes);
// console.log(ul.children);
// console.log(ul.childNodes);
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement);
// console.log(ul.parentElement);
// console.log(ul.lastChild);
// console.log(ul.lastElementChild);

// let h1 = document.querySelector("#title");
// console.log(h1);

// console.log(h1.nodeType);

// if (h1.nodeType === 1) {

// }

// console.log(h1.nodeName);

// ============================================================
// Correct way
let ul = document.querySelectorAll("ul")[1];
let li = ul.querySelectorAll("li");
console.log((li[1].textContent = "Facebook"));
