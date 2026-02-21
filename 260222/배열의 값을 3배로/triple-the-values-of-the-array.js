const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input.map(line => line.split(' ').map(Number));

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    arr[i][j] *= 3;
  }
}

for (let i = 0; i < 3; i++) {
  console.log(arr[i].join(' '));
}