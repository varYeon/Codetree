const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
const strSum = input[0] + input[1];

console.log(strSum.length);
