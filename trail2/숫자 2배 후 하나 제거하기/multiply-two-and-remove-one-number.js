const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

let minDiff = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
    arr[i] *= 2;

    for (let j = 0; j < n; j++) { // 제거할 숫자 선택
        let remainingArr = [];
        for (let k = 0; k < n; k++) { // j=k
            if (k !== j) remainingArr.push(arr[k]);
        }

        let sumDiff = 0;
        for (let k = 0; k < n - 2; k++) {
            sumDiff += Math.abs(remainingArr[k] - remainingArr[k + 1]);
        }

        minDiff = Math.min(minDiff, sumDiff);
    }

    arr[i] /= 2;
}

console.log(minDiff);
