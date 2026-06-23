const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');

const result = [];

for (let i = 0; i < input.length; i++) {
    // const num = Number(input[i]);

    result.push(String.fromCharCode(input[i]));
}

console.log(result.join(' '));
