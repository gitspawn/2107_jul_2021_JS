// CommonJS builtinModules

// let http = require("http");
// let fs = require("pizza");
// console.log(fs);

// let express = require("express");
// let chalk = require("chalk");

// console.log(chalk.magenta("Hello from node modules"));

// let userInfo = require("./user");
// console.log(userInfo.userName);

// let { userName, PI, sayHello } = require("./src/user");

// console.log(PI);

// Common JS
// let Customer = require("./src/customer");
// let vova = new Customer("Vova", 25);
// vova.sayHello();

// ========================================
// ES6
import { Customer } from "./src/customerES6.js";

// console.log(data.Customer);
// console.log(data.sayHello);
let vova = new Customer("Vova", 25);
vova.sayHello();
