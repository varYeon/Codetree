const fs = require('fs');
let nums = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let maxUnder = -Infinity;
let minOver  = Infinity;

for (let i = 0; i < nums.length; i++) {
  const x = nums[i];

  if (x < 500 && x > maxUnder) {
    maxUnder = x;
  }

  if (x > 500 && x < minOver) {
    minOver = x;
  }
}

const big = maxUnder;
const small = minOver;

console.log(big, small);
