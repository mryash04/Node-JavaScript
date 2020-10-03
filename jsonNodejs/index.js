const fs = require("fs");

const bioData = {
    name: "Mark",
    age: 24,
    gender: "Male"
};

const jsonData = JSON.stringify(bioData);

fs.writeFile("read.json", jsonData, (err) =>{
    console.log("This is a file");
});

fs.readFile("read.json", "UTF-8", (err, data) =>{
    console.log(data);

    const orgData = JSON.parse(data);
    console.log(orgData);
})