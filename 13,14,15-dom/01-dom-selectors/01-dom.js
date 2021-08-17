// https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048

// DOM - document object model
// BOM - browser object model

// document
// window.document
// console.log(window.document);
// console.log(window.document.body);
// console.log(document.body);

// ========================================
// document.querySelector - single element
// document.querySelectorAll - mulpiple elements

// Select elements
// document.querySelector(ANY VALID CSS SELECTOR)

// let h1 = document.querySelector(".green");
// h1 = document.querySelector(".heading.main__title.green");
// h1 = document.querySelector("h1");
// console.log(h1);

// let headings = document.querySelectorAll("h1");
// console.log(headings[0]);

{
    /* <h1 class="heading main__title green" id="title">Main titile</h1> */
}

// let h1 = document.querySelector("#title");
// h1 = document.querySelector("h1.green");
// h1 = document.querySelector("h1.qwewqewqeqwe"); // null if can't find
// console.log(h1);

// let ul = document.querySelector("ul.list");
// console.log(ul);

// ======================================
// document.querySelectorAll - mulpiple elements

// let ul = document.querySelectorAll("ul")[2];
// console.log(ul);

// let forms = document.querySelectorAll("form")[1];
// console.log(forms);

// let p = document.querySelectorAll("p")[1];
// console.log(p);

// =============================================
// Old School
// TMLCollection
let ul = document.getElementsByClassName("list");
// console.log(ul);

// let ulArr = Array.from(ul);

//  Rest = Spred

// Spred
// let ulArr = [...ul];
// console.log(ulArr);

// =================================================

let h1Old = document.getElementById("title");
console.log(h1Old);
let h1Moderm = document.querySelector("#title");
console.log(h1Moderm);
