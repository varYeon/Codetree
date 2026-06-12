const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let str = input[0];
const direction = input[1].split('');
const l = str.length;

for (let i = 0; i < direction.length; i++) {
    if (direction[i] === 'L') str = str.slice(1) + str[0];
    else if (direction[i] === 'R') str = str[l - 1] + str.slice(0, l - 1);
}

console.log(str);
