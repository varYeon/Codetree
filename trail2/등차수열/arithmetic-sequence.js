const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number); // [7, 6, 4, 3]

// 등차수열 | aj - K === K - ai
let maxCnt = 0;

for (let k = 1; k <= 100; k++) {
    let ajMk = 0;
    let aiMk = 0;
    let currentCnt = 0;

    for (let i = 0; i < n; i++) {
        aiMk = Math.abs(arr[i] - k);
        for (let j = i + 1; j < n; j++) {
            ajMk = Math.abs(arr[j] - k);
        }
        if (ajMk === aiMk) currentCnt++;
    }

    maxCnt = Math.max(maxCnt, currentCnt);
}

console.log(maxCnt);
