const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

const arrNew = arr.map((num) => num > 0 ? 'plus' : 'minus');

let cnt = 0;
let maxCnt = 0;

for (let i = 0; i < n; i++) {
    if (i == 0 || arrNew[i] !== arrNew[i - 1]) {
        cnt = 1;
    } else {
        cnt += 1;
    }

    if (cnt > maxCnt) {
        maxCnt = cnt;
    }
}

console.log(maxCnt);
