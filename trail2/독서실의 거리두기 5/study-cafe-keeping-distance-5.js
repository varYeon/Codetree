const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1].split('');

let distanceMax = 0;

// 원래 인원 끼리 최소 거리 구하기
let prevMin = 20;
for (let i = 0; i < n - 1; i++) {
    if (seat[i] !== '1') continue;

    let distance = 20;
    for (let j = i + 1; j < n; j++) {
        if (seat[i] === '1' && seat[j] === '1') {
            distance = Math.min(distance, Math.abs(i - j));
        }
    }
    prevMin = Math.min(prevMin, distance);
}

for (let i = 0; i < n; i++) {
    if (seat[i] === '1') continue;

    seat[i] = '2';

    let diatance = 20;
    for (let j = 0; j < n; j++) {
        // tip. 이미 앉은 사람과의 거리도 파악해야 함
        if (seat[j] === '1') {
            diatance = Math.min(diatance, Math.abs(i - j), prevMin)
        }
    }

    seat[i] = '0';
    distanceMax = Math.max(distanceMax, diatance);
}

console.log(distanceMax);
