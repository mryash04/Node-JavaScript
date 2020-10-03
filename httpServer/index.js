const fs = require("fs");

const http = require("http");

const server = http.createServer((req, res) =>{
    if(req.url == "/"){
        res.end("Hello for the home page side");
    }
    else if(req.url == "/about"){
        res.end("Hello for the about page side");
    }
    else if(req.url == "/contact"){
        res.end("Hello for the contact page side");
    }
    else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/UserApi/api.json`, "UTF-8", (err, data) =>{
            res.end(data);
        })
    }
    else{
        res.end("Error page 404. page is does not exist");
    }
});

server.listen(8000, "127.0.0.1", () =>{
    console.log("This is listening port");
});