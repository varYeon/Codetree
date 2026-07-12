const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

let maxArea = 0;

for (let i = 0; i < n; i++) {
    const [x1, y1] = points[i];
    for (let j = i + 1; j < n; j++) {
        const [x2, y2] = points[j];
        for (let k = 0; k < n; k++) {
            if (i === k || j === k) continue;
            const [x3, y3] = points[k];
            if (x1 === x3 && y2 === y3) {
                const area = Math.abs(y1 - y3) * Math.abs(x3 - x2);

                maxArea = Math.max(maxArea, area);
            }
            if (x2 === x3 && y1 === y3) {
                const area = Math.abs(y3 - y2) * Math.abs(x3 - x1);

                maxArea = Math.max(maxArea, area);
            }
        }
    }
}

console.log(maxArea);
