const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
let placed = Array(10000).fill(0); // 최대 크기를 줄일 방법
let max = 0;

for (let i = 1; i <= n; i++) {
    const [x, c] = input[i].split(' ');

    let score = 0;
    if (c === 'G') score = 1;
    else if (c === 'H') score = 2;
    placed[Number(x)] = score;

    max = Math.max(max, Number(x));
}

placed = placed.filter((_, idx) => idx <= max);
// [  0, 1, 0, 2, 1, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 2 ] , idx = 0은 필요x
let maxScore = 0;

if (max <= k) {
    for (let i = 1; i <= max; i++) {
        maxScore += placed[i];
    }
} else {
    for (let i = 1; i <= max - k; i++) {
        let sum = 0;
        for (let j = i; j <= i + k; j++) { // 사진 크기 = 양쪽 끝 x값 끼리의 차
            sum += placed[j];
        }

        maxScore = Math.max(maxScore, sum);
    }
}

console.log(maxScore);
