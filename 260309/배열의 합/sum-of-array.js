const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

for (let i = 0; i < 4; i++) {
    const nums = input[i].split(' ').map(Number);
    let sum = 0;

    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];
    }

    console.log(sum);
}