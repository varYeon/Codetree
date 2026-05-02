const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1).map(command => command.split(' '));

let checked = new Array(4001).fill(0);
let point = 2000 // 실제 위치, startPoint : 2000 === 0

for (let i = 0; i < n; i++) {
  const distance = Number(commands[i][0]);
  const direction = commands[i][1];

  if (direction === 'L') {
    for (let j = point - 1; j >= point - distance; j--) {
      checked[j] += 1;
    }
    point -= distance;
  } else if (direction === 'R') {
    for (let j = point; j < point + distance; j++) {
      checked[j] += 1;
    }
    point += distance;
  }
}

let count = 0;
for (let i = 0; i < checked.length; i++) {
  if (checked[i] > 1) count += 1;
}

console.log(count);
