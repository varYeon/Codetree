const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, b] = input[0].split(' ').map(Number);
const p = input.slice(1, 1 + n).map(Number);

let maxCnt = 0;

for (let i = 0; i < n; i++) {
    const newPrice = p[i] / 2;
    b -= newPrice;

    let cnt = 1; // i 구매 완료 => 1시작

    for (let j = 0; j < n; j++) {
        if (i === j) continue;
        if (b <= 0) break;

        b -= p[j];
        cnt += 1;
    }

    maxCnt = Math.max(maxCnt, cnt);
}

console.log(maxCnt);
