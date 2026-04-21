const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number)); //[ [ 1, 5 ], [ -3, 2 ] ]

const pointDistances = []; // need distance, index

for (let i = 0; i < n; i++) {
  const [x, y] = points[i];
  const d = Math.abs(x) + Math.abs(y);

  pointDistances.push({ distance: d, index: i + 1 });
}

const result = pointDistances.sort((a, b) => {
  if (a.distance !== b.distance) {
    return a.distance - b.distance;
  }
  return a.index - b.index;
}).map(point=>`${point.index}`);
// [ { distance: 5, index: 2 }, { distance: 6, index: 1 } ]

console.log(result.join('\n'));
