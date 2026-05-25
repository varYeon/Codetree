const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const even = [];
const result = [];

for (let i = 0; i < input.length; i++) {
   if (i % 2 !== 0) even.push(input[i])
}

for (let i = even.length - 1; i >= 0; i--) {
   result.push(even[i]);
}

console.log(result.join(''))
