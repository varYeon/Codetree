const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
// [ [ 123, 1, 1 ], [ 356, 1, 0 ], [ 327, 2, 0 ], [ 489, 0, 1 ] ]

let cnt = 0;

function check(i, j, k, B) {
    // B : [ 123, 1, 1 ]
    const [a, b, c] = String(B[0]).split('').map(Number);
    const oneCnt = B[1]; // 1
    const twoCnt = B[2]; // 1

    let okOneCnt = 0;
    let okTwoCnt = 0;

    // 조건 체크
    if (i === a) okOneCnt++;
    if (j === b) okOneCnt++; // else if (X), if가 맞으면 아랫줄 검사X
    if (k === c) okOneCnt++;

    if (i === b || i === c) okTwoCnt++;
    if (j === a || j === c) okTwoCnt++;
    if (k === a || k === b) okTwoCnt++;

    if (oneCnt === okOneCnt && twoCnt === okTwoCnt) return true;
    else return false;
}

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        if (i === j) continue;
        for (let k = 1; k <= 9; k++) {
            if (i === k || j === k) continue;

            let pass = true;

            for (let l = 0; l < n; l++) {
                if (!check(i, j, k, arr[l])) {
                    pass = false;
                    break;
                }
            }
            if (pass) cnt++;
        }
    }
}

console.log(cnt);
