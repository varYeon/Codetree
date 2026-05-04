const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const grid = Array.from({ length: 200 }, () => new Array(200).fill(false));

for (const [x1, y1, x2, y2] of rects) {
  for (let x = x1; x < x2; x++) {
    for (let y = y1; y < y2; y++) {
      grid[x + 100][y + 100] = true;  
    }
  }
}

let total = 0;
for (const row of grid) {
  for (const cell of row) {
    if (cell) total++;
  }
}

console.log(total);
