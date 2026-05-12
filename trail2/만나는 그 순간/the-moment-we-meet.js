const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
let line = 1;
const movesA = [];
for (let i = 0; i < n; i++) {
    const [d, t] = input[line++].split(' ');
    movesA.push([d, Number(t)]);
} // [ [ 'R', 9 ], [ 'L', 3 ], [ 'R', 5 ] ]
const movesB = [];
for (let i = 0; i < m; i++) {
    const [d, t] = input[line++].split(' ');
    movesB.push([d, Number(t)]);
} // [ [ 'L', 2 ], [ 'R', 2 ], [ 'L', 1 ], [ 'R', 12 ] ]

/**
 * << 문제점 >>
 * 예를 들어 두 점의 이동이 13초에서 끝났을 경우
 * 14 뒤부터는 전부 0으로 채워져 있으므로 14초에서 값이 같다고 결정함
 * -> 영원히 -1 은 나올 수 없음
 * 
 * << 해결 >>
 * 1. 0이 아닌 다른 값으로 넣음 -> X, 어쨌든 같게 되는건 똑같음
 * 2. length를 커스텀, 처음부터 배열을 초에 맞춰 만듦 -> <<시도>>
 * 3. 비교를 최소 길이까지만 진행, maxTime 구문 오류 -> 수정
 */

// 시간 배열 : idx = sec, value = location
let totalTimeA = 0;
for (let i = 0; i < n; i++) {
    totalTimeA += movesA[i][1];
}
let totalTimeB = 0;
for (let i = 0; i < m; i++) {
    totalTimeB += movesB[i][1];
}

const length = totalTimeA > totalTimeB ? totalTimeA : totalTimeB;
const roadA = Array(length).fill(0);
const roadB = Array(length).fill(0);

function move(road, currentLoc, currentTime, direction, distance) {
    let loc = currentLoc;
    let time = currentTime;

    for (let i = 0; i < distance; i++) {
        if (direction === 'R') {
            road[time] = ++loc;
        } else if (direction === 'L') {
            road[time] = --loc;
        }
        time++;
    }

    return [loc, time];
}

let locA = 0;
let timeA = 1;
let locB = 0;
let timeB = 1;

for (let i = 0; i < n; i++) {
    const [resultLoc, resultTime] = move(roadA, locA, timeA, movesA[i][0], movesA[i][1]);

    locA = resultLoc;
    timeA = resultTime;
}
for (let i = 0; i < m; i++) {
    const [resultLoc, resultTime] = move(roadB, locB, timeB, movesB[i][0], movesB[i][1]);

    locB = resultLoc;
    timeB = resultTime;
}

let result = -1;

// let maxTime = timeA > timeB ? timeA : timeB;

for (let i = 1; i < length; i++) {
    if (roadA[i] === roadB[i]) {
        result = i
        break;
    }
}

console.log(result);
