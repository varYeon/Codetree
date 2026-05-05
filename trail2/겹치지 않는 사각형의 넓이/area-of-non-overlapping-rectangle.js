const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

const grid = Array.from({ length: 2000 }, () => new Array(2000).fill(false));

function markRect(rect, boolean) {
  const [x1, y1, x2, y2] = rect;

  for (let x = x1; x < x2; x++) {
    for (let y = y1; y < y2; y++) {
      grid[x + 1000][y + 1000] = boolean;
    }
  }
}

markRect(rectA, true);
markRect(rectB, true);
markRect(rectM, false);

let total = 0;
for (const row of grid) {
  for (const cell of row) {
    if (cell) total++;
  }
}

console.log(total);
