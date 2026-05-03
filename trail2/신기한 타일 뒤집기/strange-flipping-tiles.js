const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(command => command.split(' '));

// white -1, gray 0, black +1
let tiles = new Array(10001).fill(0);
let point = 5000 // 실제 위치, startPoint : 5000 === 0

for (let i = 0; i < n; i++) {
  const distance = Number(commands[i][0]); 
  const direction = commands[i][1]; 

  if (direction === 'L') {
    for (let j = point; j > point - distance; j--) { // 현재 위치 타일포함
      tiles[j] = -1; // 어떤 색인지 관계없이 대입
    }
    point = point - distance + 1; // 마지막으로 뒤집은 타일 위치에 서있는다
  } else {
    for (let j = point; j < point + distance; j++) {
      tiles[j] = 1;
    }
    point = point + distance - 1;
  }
}

let countWhite = 0;
let countBlack = 0;
for (let i = 0; i < tiles.length; i++) {
  if (tiles[i] === -1) countWhite += 1;
  if (tiles[i] === 1) countBlack += 1;
}

// console.log(tiles.slice(50, 150));
console.log(countWhite, countBlack);
