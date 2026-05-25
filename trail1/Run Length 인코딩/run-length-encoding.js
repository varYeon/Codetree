const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const result = [];
result.push(input[0]);
let count = 1;

for (let i = 1; i < input.length; i++) {

   if (input[i - 1] === input[i]) {
      count++;
   } else {
      result.push(count);
      count = 1;
      result.push(input[i]);
   }

   if (i === input.length - 1) {
      result.push(count);
   }
}

const resultStr = result.join('');

console.log(resultStr.length);
console.log(resultStr);
