const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const nums = [];
for (let i = 1; i <= n; i++) {
    nums.push(Number(input[i]));
}

const isBomb = Array(n).fill(false);

for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
        const d = j - i;

        if (d <= k && nums[i] === nums[j]) {
            isBomb[i] = true;
            isBomb[j] = true;
        }
    }
}

let isAllFalse = true;
let maxBomb = 0;
const countMap = {};

for (let i = 0; i < n; i++) {
    if (isBomb[i]) {
        isAllFalse = false;
        const v = nums[i];
        countMap[v] = (countMap[v] || 0) + 1;
    }
}

if (isAllFalse) console.log(0);
else {
    let maxCount = 0;
    for (const key in countMap) {
        if (countMap[key] > maxCount) {
            maxCount = countMap[key];
        }
    }

    for (const key in countMap) {
        if (countMap[key] === maxCount) {
            maxBomb = Math.max(maxBomb, Number(key));
        }
    }

    console.log(maxBomb);
}
