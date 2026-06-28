const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const INT_MAX = Number.MAX_SAFE_INTEGER;

let minSum = INT_MAX;
for (let i = 0; i < n; i++) {
    let sumdiff = 0;

    for (let j = 0; j < n; j++) {
        sumdiff += Math.abs(j - i) * arr[j];
    }

    minSum = Math.min(minSum, sumdiff);
}

console.log(minSum);
