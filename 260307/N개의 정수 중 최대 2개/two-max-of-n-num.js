const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const all = Number(input[0]);
const nums = input[1].split(' ').map(Number).sort((a, b) => (b - a))

console.log(nums[0], nums[1]);
