const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const all = Number(input[0]);
const nums = input[1].split(' ').map(Number);

let minDivide = 10000;

// 풀이 1
/*
for (let i = 0; i < all; i++) {
    const a = nums[i];

    for (let j = 1; j < all; j++) {
        const b = nums[j];

        const divide = Math.abs(a - b);

        if (divide !== 0 && divide <= minDivide) minDivide = divide;
    }
}
*/

// 풀이 2
// 오름차순 정렬, 가장 가까이 있는 수가 가장 작은 차이를 보임
for (let i = 0; i < all; i++) {
    const divide = nums[i + 1] - nums[i];

    if (divide !== 0 && divide <= minDivide) minDivide = divide;
}

console.log(minDivide);
