const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
// [ [ 0, 0 ], [ 4, 0 ], [ 0, 4 ] ]

const grid = Array.from({ length: 200 }, () => new Array(200).fill(false));

function markRect(rect) {
    const [x1, y1] = rect;

    for (let x = x1; x < x1 + 8; x++) {
        for (let y = y1; y < y1 + 8; y++) {
            grid[x + 100][y + 100] = true;
        }
    }
}

for (const rect of rects) {
    markRect(rect);
}

let total = 0;
for (const row of grid) {
    for (const cell of row) {
        if (cell) total++;
    }
}

console.log(total);
