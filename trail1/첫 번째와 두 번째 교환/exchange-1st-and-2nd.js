const fs = require("fs");
let str = fs.readFileSync(0).toString().trim().split('');

const first = str[0];
const second = str[1];

for (let i = 0; i < str.length; i++) {
    if (str[i] === first) str[i] = second;
    else if (str[i] === second) str[i] = first;
}

console.log(str.join(''));
