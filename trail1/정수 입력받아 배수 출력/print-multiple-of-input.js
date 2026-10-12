const fs = require("fs");
let input = Number(fs.readFileSync(0).toString());

console.log(input, input * 2, input * 3, input * 4, input * 5);