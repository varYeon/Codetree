const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1, y1, x2, y2]);
}
// rectangles: [ [ 2, 1, 7, 4 ], [ 5, -1, 10, 3 ] ]

const grid = Array.from({ length: 200 }, () => new Array(200).fill(0));

// red 1, blue 2
function markRect(rect, color) {
    const [x1, y1, x2, y2] = rect;

    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            grid[x + 100][y + 100] = color === 'red' ? 1 : 2;
        }
    }
}

for (let i = 0; i < n; i++) {
    const color = i % 2 === 0 ? 'red' : 'blue';
    const rect = rectangles[i];
    markRect(rect, color);
}

let total = 0;
for (const row of grid) {
    for (const cell of row) {
        if (cell === 2) total++;
    }
}

console.log(total);
