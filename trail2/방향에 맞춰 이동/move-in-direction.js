const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1); // [ 'N 3', 'E 2', 'S 1', 'E 2' ]

let x = 0, y = 0;
let dx = [1, 0, -1, 0], dy = [0, -1, 0, 1];

const dirMap = {
  'E': 0,
  'S': 1,
  'W': 2,
  'N': 3
};

for (let i = 0; i < n; i++) {
  let [direction, distance] = moves[i].split(' ');
  distance = Number(distance);
  direction = dirMap[direction];

  let nx = x + (dx[direction] * distance);
  let ny = y + (dy[direction] * distance);

  // 누적
  x = nx;
  y = ny;
}

console.log(x, y);
