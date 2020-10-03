const fs = require("fs");

fs.writeFile("myread.txt", "I addicted to sports", (err) =>{
    console.log("This is a file");
});

fs.appendFile("myread.txt", "I joy to play cricket", (err) =>{
    console.log("This is update data");
})

fs.readFile("myread.txt", "UTF-8", (err, data) =>{
    console.log(data);
})