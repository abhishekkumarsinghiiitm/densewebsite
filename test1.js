const fs = require("fs");
const text = fs.readFileSync("del.txt", "utf-8");

text = text.replace("content", "rohan");

console.log("the contennt is");
console.log(text);

console.log("creating a new file");
fs.writeFileSync("rohan.txt", text);