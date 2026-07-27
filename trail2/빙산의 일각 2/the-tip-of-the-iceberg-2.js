const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const h = input.slice(1, 1 + n).map(Number);
// n = 9, [ 3, 5, 2, 3, 2, 1, 4, 2, 3 ]

let maxIce = 0;

for (let H = 1; H <= 1000; H++) {
    // H를 1000까지 잡는 것 vs for문으로 h 최댓값 구해서 넣는 것
    let currentIce = 0;
    let inGroup = false;

    // Tip. 덩어리로 세는 법 (hard)
    for (let i = 0; i < n; i++) {
        if (h[i] > H) {
            if (!inGroup) {
                inGroup = true;
                currentIce++;
            }
        } else
            inGroup = false;
    }

    maxIce = Math.max(maxIce, currentIce);
}

console.log(maxIce);
