const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const str = input[0];
const parts = input[1];
let count = 0;

for (let i = 0; i < str.length - 1; i++) {
  let target = str.slice(i, i + 2);
  
  if (target === parts) count++;
}

console.log(count);
