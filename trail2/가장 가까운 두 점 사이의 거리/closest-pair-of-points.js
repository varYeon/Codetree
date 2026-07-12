const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

let minDis = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
    const [x1, y1] = points[i];
    let distance = Number.MAX_SAFE_INTEGER;
    for (let j = i + 1; j < n; j++) {
        const [x2, y2] = points[j];

        distance = (x1 - x2) ** 2 + (y1 - y2) ** 2;
    }
    minDis = Math.min(minDis, distance);
}

console.log(minDis);
