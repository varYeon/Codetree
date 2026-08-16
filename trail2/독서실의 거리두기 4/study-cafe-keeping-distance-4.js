const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1].split('');

// 원래 인원 끼리 최소 거리 구하기
let prevMin = 100;
for (let i = 0; i < n - 1; i++) {
    if (seat[i] !== '1') continue;

    let distance = 100;
    for (let j = i + 1; j < n; j++) {
        if (seat[i] === '1' && seat[j] === '1') {
            distance = Math.min(distance, Math.abs(i - j));
        }
    }
    prevMin = Math.min(prevMin, distance);
}

let distanceMax = 0;
for (let i = 0; i < n; i++) {
    if (seat[i] === '1') continue;

    seat[i] = '2';

    for (let k = i + 1; k < n; k++) {
        if (seat[k] === '1') continue;

        seat[k] = '2';

        let distance = Math.min(prevMin, Math.abs(k - i));
        for (let j = 0; j < n; j++) {
            if (seat[j] === '1') {
                distance = Math.min(distance, Math.abs(i - j), Math.abs(k - j));
            }
        }

        seat[k] = '0';

        distanceMax = Math.max(distanceMax, distance);
    }

    seat[i] = '0';
}

console.log(distanceMax);
