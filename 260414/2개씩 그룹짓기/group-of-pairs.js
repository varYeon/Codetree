const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

const arangeNums = nums.sort((a, b) => b - a); // 내림차순 정렬
let result = 0;

for (let i = 0; i < n; i++) {
    if (result < arangeNums[i] + arangeNums[2 * n - 1 - i]) {
        result = arangeNums[i] + arangeNums[2 * n - 1 - i];
    }
}

console.log(result);
