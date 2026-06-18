const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const moves = [];
for (let i = 1; i <= m; i++) {
    moves.push(input[i].split(" ").map(Number));
}

const grid = Array.from(Array(n), () => Array(n).fill(0));
const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
let relaxState = 0;

function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
}

for (let i = 0; i < m; i++) {
    // 색칠
    let [r, c] = moves[i];
    let x = r - 1;
    let y = c - 1;

    grid[x][y] = 1;

    // 탐색
    let coloredNeighbors = 0;

    for (let dir = 0; dir < 4; dir++) {
        let nx = x + dx[dir];
        let ny = y + dy[dir];

        if (inRange(nx, ny) && grid[nx][ny] === 1) {
            coloredNeighbors++;
        }
    }

    if (coloredNeighbors === 3) relaxState = 1;
    else relaxState = 0;

    console.log(relaxState);
}
