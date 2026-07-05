const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
let location = Array(101).fill(0);
let max = 0;

for (let i = 0; i < n; i++) {
    const [posStr, letter] = input[i].split(' ');
    const pos = Number(posStr);

    location[pos] = letter;

    max = Math.max(max, posStr);
}

let maxSize = 0;

for (let i = 0; i <= max; i++) {
    if (location[i] === 0) continue;

    let currentSize = 0;

    // G, H 따로 카운트
    let countG = 0;
    let countH = 0;

    // 시작점 카운트
    if (location[i] === 'G') countG++;
    else countH++;

    for (let j = i + 1; j <= max; j++) {
        if (location[j] === 0) continue;

        // 조건 확인
        if (location[j] === 'G') countG++;
        else countH++;

        // 조건에 맞으면 사이즈 확인
        if (countH === 0 || countG === 0 || countH === countG) currentSize = j - i;
    }

    maxSize = Math.max(maxSize, currentSize);
}

console.log(maxSize);
