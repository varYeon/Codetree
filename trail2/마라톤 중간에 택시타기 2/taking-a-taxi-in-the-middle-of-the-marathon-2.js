const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = Array.from({ length: n }, (_, i) => input[i + 1].split(' ').map(Number));
// [ [ 0, 0 ], [ 8, 3 ], [ 11, -1 ], [ 10, 0 ] ]
arr.unshift([0, 0]);
// [ [ 0, 0 ], [ 0, 0 ], [ 8, 3 ], [ 11, -1 ], [ 10, 0 ] ]

let minDistance = Number.MAX_SAFE_INTEGER;

// 1번과 n번은 건너뛰지 않음
for (let k = 2; k < n; k++) {
    // 건너뛸 체크 포인트 설정
    const newArr = arr.filter((_, idx) => idx !== k);
    const L = newArr.length;

    let distance = 0;

    for (let i = 1; i < L - 1; i++) {
        // 거리 계산
        distance += (Math.abs(newArr[i + 1][0] - newArr[i][0]) + Math.abs(newArr[i + 1][1] - newArr[i][1]));
    }

    minDistance = Math.min(minDistance, distance);
}

console.log(minDistance);
