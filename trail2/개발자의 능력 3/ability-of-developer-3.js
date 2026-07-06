const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].trim().split(' ').map(Number);

let min = Number.MAX_SAFE_INTEGER;

function getDiff(i, j) {
    const sum1 = arr[i] + arr[j];
    let totalSum = 0;

    for (let k = 0; k < 6; k++) {
        totalSum += arr[k];
    }

    const sum2 = totalSum - sum1;

    return Math.abs(sum1 - sum2);
}

for (let i = 0; i < 6; i++) {
    for (let j = i + 1; j < 6; j++) {
        min = Math.min(min, getDiff(i, j));
    }
}

console.log(min);
