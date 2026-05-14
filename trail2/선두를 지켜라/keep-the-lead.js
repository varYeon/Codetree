const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map(line => line.split(" ").map(Number)); // 속도, 시간
// [ [ 1, 2 ], [ 4, 1 ], [ 1, 1 ], [ 2, 10 ] ]
const bData = input.slice(n + 1, n + 1 + m).map(line => line.split(" ").map(Number));

const totalTime = aData.reduce((acc, cur) => acc + cur[1], 0);
let posA = Array(totalTime + 1).fill(0);
let posB = Array(totalTime + 1).fill(0);

let timeA = 1;
for (let i = 0; i < n; i++) {
    const [v, t] = aData[i];
    const d = v * t;
    for (let j = 0; j < t; j++) {
        posA[timeA] = posA[timeA - 1] + d;
        timeA++
    }
}

let timeB = 1;
for (let i = 0; i < m; i++) {
    const [v, t] = bData[i];
    const d = v * t;
    for (let j = 0; j < t; j++) {
        posB[timeB] = posB[timeB - 1] + d;
        timeB++;
    }
}

let count = 0;
let currentLeader = 0; // 0: 동점, 1: A, 2: B

for (let i = 1; i <= totalTime; i++) {
    let newLeader = 0;

    if (posA[i] > posB[i]) {
        newLeader = 1;
    } else if (posA[i] < posB[i]) {
        newLeader = 2;
    } else {
        newLeader = 0;
    }

    // 선두가 바뀌었는지 체크
    if (newLeader !== 0 && currentLeader !== 0 && currentLeader !== newLeader) {
        count++;
    }

    // 동점이 아닐 때만 현재 선두를 업데이트
    if (newLeader !== 0) {
        currentLeader = newLeader;
    }
}

console.log(count);
