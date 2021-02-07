const http = require("http");
const fs = require("fs");
const path = require("path");

console.log(path);
console.log(path.extname("C:\Users\Dell\Desktop\NodeJS\NodeRepeat\server\index.js"));
console.log(path.dirname("C:\Users\Dell\Desktop\NodeJS\NodeRepeat\server\index.js"));
console.log(path.parse("C:\Users\Dell\Desktop\NodeJS\NodeRepeat\server\index.js"));

console.log(`${__dirname}/data.json`);

fs.readFile("data.json", "UTF-8", (err, data) =>{
    console.log(data);
});

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        fs.readFile("data.json", "UTF-8", (err, data) =>{
            res.end(data);
            console.log(err);
        })
    }else if(req.url == "/about"){
        res.end("This is from about page side");
    }else if(req.url == "/contact"){
        res.end("This is from contact page side");
    }else{
        res.end("Error Page");
    }
});

server.listen(8000, "127.0.0.1", (err) =>{
    console.log("This is listening port 8000");
});