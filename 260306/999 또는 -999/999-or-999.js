const fs = require('fs');
let nums = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let arr = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 999 || nums[i] === -999) {
        break;
    }
    arr.push(nums[i]);
}

let big = arr[0];
let small = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (big <= arr[i]) big = arr[i];
    if (small >= arr[i]) small = arr[i];
}

console.log(big, small);
