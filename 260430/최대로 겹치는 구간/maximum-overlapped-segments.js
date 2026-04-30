const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].split(' ').map(Number));
} // [ [ 1, 5 ], [ 4, 6 ], [ 3, 5 ] ]

// 좌표 최댓값
let minCoord = -100000;
let maxCoord = 100000;
for (let i = 0; i < segments.length; i++) {
  const s = segments[i][0];
  const e = segments[i][1];

  if (s < minCoord) minCoord = s;
  if (e > maxCoord) maxCoord = e;
}
const size = maxCoord - minCoord + 1;

let checked = new Array(size).fill(0);

for (let i = 0; i < n; i++) {
  const start = segments[i][0];
  const end = segments[i][1];

  for (let j = start; j < end; j++) {
    // 구간 [start, end), end는 포함x
    const idx = j - minCoord;
    checked[idx] += 1;
  }
}

let max = 0;
for (let i = 0; i < checked.length; i++) {
  if (checked[i] > max) max = checked[i];
}

console.log(max);

