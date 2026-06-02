const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const str = input[0];
const parts = input[1];
let idx = 0;

for (let i = 0; i < str.length; i++) {
  const target = str.slice(i, i + parts.length);

  if (target === parts) {
    idx = i;
    break;
  } else {
    idx = -1;
  }
}

console.log(idx)
