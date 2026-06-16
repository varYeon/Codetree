const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

let result = Array.from(Array(n), () => Array(m).fill(0));

const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
let x = 0, y = 0; // startPoint
let dirNum = 0;
result[x][y] = 1;

// case 1. 격자 내부
function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
}

for (let i = 2; i <= n * m; i++) {
    // case 2. 방문 여부
    let nx = x + dx[dirNum], ny = y + dy[dirNum];

    if (!inRange(nx, ny) || result[nx][ny] !== 0) {
        dirNum = (dirNum + 1) % 4;
    }

    x += dx[dirNum];
    y += dy[dirNum];
    result[x][y] = i;
}

// 출력
for (let i = 0; i < n; i++) {
    let print = "";
    for (let j = 0; j < m; j++) {
        print += `${result[i][j]} `;
    }

    console.log(print);
}
