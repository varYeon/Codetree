const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
let x1List = [], x2List = [];
for (let i = 1; i <= n; i++) {
    const [x1, x2] = input[i].split(' ').map(Number);
    x1List.push(x1);
    x2List.push(x2);
} // x1List : [ 1, 4, 7, 2 ], x2List : [ 5, 6, 10, 4 ]

let answer = 'No';

for (let i = 0; i < n; i++) { // 제거할 선분 -> i 선분
    let right = Number.MAX_SAFE_INTEGER;
    let left = Number.MIN_SAFE_INTEGER;

    for (let j = 0; j < n; j++) {
        if (i === j) continue;
        right = Math.min(right, x2List[j]);
        left = Math.max(left, x1List[j]);
    }

    if (left <= right) { // 공통으로 만나는 점
        answer = 'Yes';
        break;
    }
}

console.log(answer);

/* 이전 문제들처럼 선분이 겹치는지를 모두 확인 하는 것 X
모든 선분들이 지나는 한 점을 찾음 O 
-> 전체 선분을 다 돌리면서 가장 좁은 범위의 선분을 확인하고,
    그 선분이 왼쪽에서 오른쪽으로 커지는지를 확인하면 공통으로 만나는 점을 찾을 수 있음 (완탐X) */
