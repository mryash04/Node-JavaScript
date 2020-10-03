const chalk = require("chalk");
const validator = require("validator");

console.log(chalk.red("Hello World"));
console.log(chalk.green("Hello World"));
console.log(chalk.red.underline.inverse("false"));
console.log(chalk.green.underline.inverse("true"));
console.log(chalk.red.bgRed.bold("Hello World"));
console.log(chalk.white.bgRed.bold("Hello World"));
console.log(chalk.blue.bgGreen.italic("Hello World")); 
console.log(chalk.white.bgGreen.italic("Hello World"));

console.log(validator.isEmail("yash.0405agarwal@gmail.com"));