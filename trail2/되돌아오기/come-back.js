const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const moves = input.slice(1);
// [ 'N 3', 'E 2', 'S 3', 'W 4', 'S 5', 'E 8' ]

let x = 0, y = 0;
let dx = [1, 0, -1, 0], dy = [0, -1, 0, 1];
let time = 0;
let isBack = false;

const dirMap = {
    'E': 0,
    'S': 1,
    'W': 2,
    'N': 3
};

for (let i = 0; i < n; i++) {
    let [direction, distance] = moves[i].split(' ');
    distance = Number(distance); // 3
    let dirNum = dirMap[direction]; // 'N' -> 3

    for (let j = 0; j < distance; j++) {
        x += dx[dirNum];
        y += dy[dirNum];
        time++;

        if (x === 0 && y === 0) {
            isBack = true;
            break;
        }
    }

    if (isBack) break;
}

console.log(time);
