const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);

// 오름차순
function ascending(nums) {
    return nums.sort((a, b) => a - b);
}

// 내림차순
function descending(nums) {
    return nums.sort((a, b) => b - a);
}

console.log(ascending(nums).join(' '));
console.log(descending(nums).join(' '));
