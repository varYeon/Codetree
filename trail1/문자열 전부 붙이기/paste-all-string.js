const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const n = input[0];
const strs = [];
for (let i = 1; i <= n; i++) {
    strs.push(input[i]);
}

console.log(strs.join(''));
