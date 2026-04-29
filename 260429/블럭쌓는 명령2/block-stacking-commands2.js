const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));
// [ [ 5, 5 ], [ 2, 4 ], [ 4, 6 ], [ 3, 5 ] ]

/* let block = [];
for (let i = 0; i < n; i++) {
  block.push(0);
} */
let block = new Array(n).fill(0);

for (let i = 0; i < k; i++) {
  const start = segments[i][0];
  const end = segments[i][1];

  for (let j = start - 1; j <= end - 1; j++) {
    block[j] += 1;
  }
}

let max = 0;
for (let i = 0; i < n; i++) {
  if (block[i] > max) max = block[i];
}

console.log(max);
