const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const str = input[0]
const target = input[1]
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === target) count++;
}

console.log(count)
