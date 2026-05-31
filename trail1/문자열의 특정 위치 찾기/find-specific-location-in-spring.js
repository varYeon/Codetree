const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

const str = input[0];
const alphabet = input[1];
let idx = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === alphabet) {
        idx = i;
        break;
    } else {
        idx = 'No';
    }
}

console.log(idx)
