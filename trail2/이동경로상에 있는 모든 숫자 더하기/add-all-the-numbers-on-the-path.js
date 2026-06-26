const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const commands = input[1].split(''); // RFFFLFLF
const board = input.slice(2, 2 + n).map(row => row.split(' ').map(Number));
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

// 시계방향: 북(0), 동(1), 남(2), 서(3)
let dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1];
let dirNum = 0; // 북쪽 시작

const center = Math.floor(n / 2);
let x = center, y = center;
let sum = board[x][y];

function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
}

for (let i = 0; i < t; i++) {
    if (commands[i] === 'L') {
        dirNum = (dirNum + 3) % 4;
    } else if (commands[i] === 'R') {
        dirNum = (dirNum + 1) % 4;
    } else if (inRange && commands[i] === 'F') {
        let nx = x + dx[dirNum];
        let ny = y + dy[dirNum];

        if (!inRange(nx, ny)) {
            continue;
        }

        x = nx;
        y = ny;

        sum += board[x][y];
    }
}

console.log(sum);   
