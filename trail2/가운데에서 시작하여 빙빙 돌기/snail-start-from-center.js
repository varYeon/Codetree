const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const grid = Array.from(Array(n), () => Array(n).fill(0));
const dx = [0, -1, 0, 1], dy = [1, 0, -1, 0];
let dirNum = 0;

const center = Math.floor(n / 2);
let x = center, y = center;
grid[x][y] = 1;

let num = 2;
let step = 1;

/* for (let i = 2; i <= n * n; i++) {
    let nx = x + dx[dirNum], ny = y + dy[dirNum];

    dirNum = (dirNum + 1) % 4;

    x += dx[dirNum];
    y += dy[dirNum];
    grid[x][y] = i;
} */

while (num <= n * n) {
    for (let repeat = 0; repeat < 2; repeat++) {
        for (let s = 0; s < step; s++) {
            if (num > n * n) break;
            x += dx[dirNum];
            y += dy[dirNum];
            grid[x][y] = num++;
        }
        dirNum = (dirNum + 1) % 4;
    }
    step++;
}

// 출력
for (let i = 0; i < n; i++) {
    let print = "";

    for (let j = 0; j < n; j++) {
        print += `${grid[i][j]} `
    }

    console.log(print);
}
