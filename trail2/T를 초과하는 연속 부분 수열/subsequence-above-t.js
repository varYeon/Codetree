const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let cnt = 0;
let maxCnt = 0;

for (let i = 0; i < n; i++) {
    if (arr[i] > t) {
        cnt += 1;
    } else {
        cnt = 0;
    }

    if (cnt > maxCnt) {
        maxCnt = cnt;
    }
}

console.log(maxCnt);
