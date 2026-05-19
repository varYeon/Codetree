const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
let str = '';
let count = 0;

for (let i = 1; i <= n; i++) {
    str += input[i];

    if (input[i][0] === 'a') count++;

}

console.log(str.length, count);
