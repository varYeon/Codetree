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

// 시간 배열 : idx = sec, value = location
const length = 1000;
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
let maxTime = roadA.length > roadB.length ? roadA.length : roadB.length;
for (let i = 1; i < maxTime; i++) {
    if (roadA[i] === roadB[i]) {
        result = i
        break;
    }
}

console.log(result);
