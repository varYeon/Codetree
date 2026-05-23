const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const str = input[0];
const n = input[1];
const result = [];

for (let i = str.length - 1; i >= str.length - n; i--) {
   result.push(str[i]);
}

console.log(result.join(''))
