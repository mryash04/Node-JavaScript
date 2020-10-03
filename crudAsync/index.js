const fs = require("fs");

fs.mkdir("yash", (err) =>{
    console.log("This is a folder");
});

fs.writeFile("yash/myread.txt", "I addicted to sports", (err) =>{
    console.log("This is a file");
});

fs.appendFile("yash/myread.txt", "I joy to play cricket", (err) =>{
    console.log("This is update data");
});

fs.readFile("yash/myread.txt", "utf-8", (err, data) =>{
    console.log(data);
});

fs.rename("yash/myread.txt", "yash/myReadSecond.txt", (err) =>{
    console.log("This is update file");
});

fs.unlink("yash/myReadSecond.txt", (err) =>{
    console.log("This is deleted file");
});

fs.rmdir("yash", (err) =>{
    console.log("This is deleted folder");
});