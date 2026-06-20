const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const grid = Array.from(Array(n), () => Array(m).fill(0))
let x = 0, y = 0;
const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
let dirNum = 0;
grid[x][y] = 'A';

function inRange(r, c) {
    return r >= 0 && r < n && c >= 0 && c < m;
}

for (let i = 1; i < n * m; i++) {
   let nx = x + dx[dirNum], ny = y + dy[dirNum];

    if (!inRange(nx, ny) || grid[nx][ny] !== 0) {
        dirNum = (dirNum + 1) % 4;
    }

    x += dx[dirNum];
    y += dy[dirNum];

   const inAlpha = String.fromCharCode(65 + i) // 'A' = 65
    grid[x][y] = inAlpha;
}

// 출력
for (let i = 0; i < n; i++) {
    let print = "";
    for (let j = 0; j < m; j++) {
        print += `${grid[i][j]} `;
    }

    console.log(print);
}

