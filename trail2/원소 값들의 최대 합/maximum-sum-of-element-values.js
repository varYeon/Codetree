const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = [0].concat(input[1].trim().split(' ').map(Number));

let maxSum = 0;

for (i = 0; i < n; i++) {
    let sum = 0;
    let start = i;

    for (let j = 0; j < m; j++) {
        sum += arr[start + 1];
        start = arr[start + 1] - 1;
    }

    maxSum = Math.max(maxSum, sum);
}

console.log(maxSum);
