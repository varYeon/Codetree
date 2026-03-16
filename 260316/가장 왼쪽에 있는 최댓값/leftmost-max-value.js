const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);

const result = [];
let idx = n;

while (true) {
    let max = nums[0];
    let maxIdx = 0;

    for (let i = 0; i < idx; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIdx = i;
        }
    }
    result.push(maxIdx + 1);
    idx = maxIdx;

    if (maxIdx === 0) break;
}

console.log(result.join(' '));
