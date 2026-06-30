const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]); // 방의 갯수 : 5
const arr = input.slice(1, n + 1).map(Number);
// 각 방에 들어가야 하는 인원 : [ 0, 4, 7, 8, 6, 4 ] -> idx 방마다 몇 명이 들어가야 하는지, 1번방에 4명, 2번방에 7명 ...
arr.unshift(0);

let min = Number.MAX_SAFE_INTEGER;

for (let i = 1; i <= n; i++) {
    let distance = 0;

    for (let j = 1; j <= n; j++) {
        let dist = 0;
        if (j >= i) {
            dist = j - i;
        } else {
            dist = j - i + n;
        }

        distance += (dist * arr[j]);
    }

    min = Math.min(min, distance);
}

console.log(min);
