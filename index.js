const fs = require("fs");

//fs.mkdirSync("yash");

fs.writeFileSync("yash/read.txt", "I addicted to sports");

fs.appendFileSync("yash/read.txt", "I joy to play cricket");

const data = fs.readFileSync("yash/read.txt", "utf8");
//console.log(data);

fs.renameSync("yash/read.txt", "yash/myread.txt");

fs.unlinkSync("yash/myread.txt");

fs.rmdirSync("yash");