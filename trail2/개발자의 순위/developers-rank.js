const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);
const arr = input.slice(1, k + 1).map(line => line.split(' ').map(Number));
// [ [ 4, 1, 2, 3 ], [ 4, 1, 3, 2 ], [ 4, 2, 1, 3 ] ]

let cnt = 0;

// tip. 구하는 것에 대한 반복문 구조
for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
        if (a === b) continue;

        let aWin = true;
        for (let i = 0; i < k; i++) {
            // tip. indexof
            const aIdx = arr[i].indexOf(a);
            const bIdx = arr[i].indexOf(b);

            if (aIdx < bIdx) aWin = true; // 숫자가 작아야 높은 등수
            else {
                aWin = false;
                break;
            }
        }

        if (aWin) cnt++;
    }
}

console.log(cnt);
