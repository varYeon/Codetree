const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const n = input[0];
const nums = input[1].split(' ');
const numStr = nums.join('');

const result = [];
for (let i = 0; i < numStr.length; i += 5) {
    result.push(numStr.slice(i, i + 5));
}

console.log(result.join('\n'));
