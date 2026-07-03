const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let max = 0;

for (let i = 0; i <= n - k; i++) {
    // i = 시작점, j = 시작점 부터 k개
    let sum = 0;
    for (let j = i; j < i + k; j++) {
        sum += arr[j];
    }

    max = Math.max(max, sum);
}

console.log(max);
