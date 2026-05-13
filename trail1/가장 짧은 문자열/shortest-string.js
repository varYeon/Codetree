const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let maxLength = input[0].length;
let minLength = input[0].length;

for (let i = 0; i < 3; i++) {
    if (input[i].length > maxLength) maxLength = input[i].length;

    if (input[i].length < minLength) minLength = input[i].length;
}

const result = maxLength - minLength;
console.log(result)
