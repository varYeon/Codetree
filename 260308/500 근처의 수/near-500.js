const fs = require('fs');
let nums = fs.readFileSync(0).toString().trim().split(' ').map(Number);

// let big = nums[0]; // nums[0] 의 범위가 500 이상 이라면?
// let small = nums[1]; // nums[0] 의 범위가 500 이하 라면?
let big = 0;
let small = 0;

for (let i = 0; i < 10; i++) {
    if (nums[i] < 500) {
        big = nums[i];
        continue;
    }
    if (nums[i] > 500) {
        small = nums[i];
        break;
    }
}
for (let i = 0; i < 10; i++) {
    if (nums[i] >= big) big = nums[i];
    if (nums[i] <= small) small = nums[i];
}

console.log(big, small);
