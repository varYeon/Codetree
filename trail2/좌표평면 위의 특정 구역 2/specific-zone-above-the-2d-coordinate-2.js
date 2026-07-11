const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const points = input.slice(0, n).map(line => line.split(' ').map(Number));

let minArea = Number.MAX_SAFE_INTEGER;

// points[i] 중에 뺄 점을 선정
for (let i = 0; i < n; i++) {

    let xMax = 0;
    let yMax = 0;
    let xMin = 40000;
    let yMin = 40000;

    // i를 뺀 나머지 point[j] 돌리기
    for (let j = 0; j < n; j++) {
        if (i === j) continue;

        const [x, y] = points[j];

        xMax = Math.max(xMax, x);
        yMax = Math.max(yMax, y);
        xMin = Math.min(xMin, x);
        yMin = Math.min(yMin, y);
    }

    const area = (xMax - xMin) * (yMax - yMin);

    minArea = Math.min(minArea, area);
}

console.log(minArea);
