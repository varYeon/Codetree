const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].trim().split(' ').map(Number);

let min = Number.MAX_SAFE_INTEGER;

function getDiff(i, j, k) {
    const sum1 = arr[i] + arr[j] + arr[k];
    let totalSum = 0;

    for (let l = 0; l < 6; l++) {
        totalSum += arr[l];
    }

    const sum2 = totalSum - sum1;

    return Math.abs(sum1 - sum2);
}

for (let i = 0; i < 6; i++) {
    for (let j = i + 1; j < 6; j++) {
        for (let k = j + 1; k < 6; k++) {
            min = Math.min(min, getDiff(i, j, k));
        }
    }
}

console.log(min);
