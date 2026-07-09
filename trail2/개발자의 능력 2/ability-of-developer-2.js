const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[0].split(" ").map(Number);

let divideMin = Number.MAX_SAFE_INTEGER;

let totalSum = 0;
for (let a = 0; a < 6; a++) {
    totalSum += arr[a];
}

function getDiff(i, j, k, l) {
    const sum1 = arr[i] + arr[j];
    const sum2 = arr[k] + arr[l];
    const sum3 = totalSum - sum1 - sum2;

    const max = Math.max(sum1, sum2, sum3);
    const min = Math.min(sum1, sum2, sum3);

    return max - min;
}

for (let i = 0; i < 6; i++) {
    for (let j = i + 1; j < 6; j++) {
        for (let k = 0; k < 6; k++) {
            if (k === i || k === j) continue;
            for (let l = k + 1; l < 6; l++) {
                if (l === i || l === j) continue;
                divideMin = Math.min(divideMin, getDiff(i, j, k, l));
            }
        }
    }
}

console.log(divideMin);
