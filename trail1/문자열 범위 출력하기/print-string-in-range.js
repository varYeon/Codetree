const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const result = [];

for (let i = 2; i < 10; i++) {
    result.push(input[i])
}

console.log(result.join(''))
