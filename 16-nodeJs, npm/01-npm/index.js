console.log("Hello from NPM");

function sum(a, b) {
    console.log(a + b);
}

const chalk = require("chalk");
console.log(chalk.blue("Hello world!"));
console.log(chalk.cyan.italic.bold("Test"));
console.log(chalk.cyan.italic(sum(5, 10)));

// =============================================
// Packajes versions

// "express": "^4.17.1",
// 4 -  minor/ major -  основная текущая версия
// 17 - патч (дополнительные фичи)
// 1 - bug-fix

// "nodemon":
// "2.0.12"
// "2.12.0"
// "2.25.5"
// "2.35.6"

// "3.0.5"
// "3.1.15"
