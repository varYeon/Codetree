const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1];

let Ccount = 0;
let Ocount = 0;
let totalCount = 0;

for (let i = 0; i < n; i++) {
    if (string[i] === 'C') Ccount++;
    else if (Ccount && string[i] === 'O') Ocount++;
    else if (Ocount && string[i] === 'W') totalCount += (Ccount * Ocount);
}

console.log(totalCount);
