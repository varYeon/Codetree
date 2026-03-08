const fs = require('fs');
let nums = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let big = 1;
let small  = 1000;

for (let i = 0; i < 10; i++) {
  if (nums[i] < 500 && nums[i] > big) big = nums[i];
  if (nums[i] > 500 && nums[i] < small) small = nums[i];
}

console.log(big, small);
