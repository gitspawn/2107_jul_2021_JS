let tools = ["hammer", "screwdriver", "knife", "saw", "axe"];

// Tempalte
let temlateRef = document.querySelector(".tempale-usage").innerHTML;

// DOM elem for disoaly template
let divRef = document.querySelector("#root");

// console.log(Handlebars);
let templateScript = Handlebars.compile(temlateRef);
let markup = templateScript(tools);
divRef.insertAdjacentHTML("beforeend", markup);
