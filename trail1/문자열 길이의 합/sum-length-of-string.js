const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
let str = '';
let count = 0;

for (let i = 1; i <= n; i++) {
    str += input[i];
}

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') count++;
}

console.log(str.length, count);
