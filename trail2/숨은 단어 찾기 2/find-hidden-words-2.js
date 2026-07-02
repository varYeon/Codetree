const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1, n + 1);

const dx = [1, 1, 1, 0, 0, -1, -1, -1], dy = [-1, 0, 1, -1, 1, -1, 0, 1]
let dirNum = 0;
let x = 0, y = 0;
let cnt = 0;

function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (arr[i][j] === 'L') {
            x = i, y = j;

            for (let k = 0; k < 8; k++) {
                dirNum = k;

                let nx = x + dx[dirNum];
                let ny = y + dy[dirNum];

                if (inRange(nx, ny) && arr[nx][ny] === 'E') {

                    let nnx = nx + dx[dirNum];
                    let nny = ny + dy[dirNum];

                    if (inRange(nnx, nny) && arr[nnx][nny] === 'E') cnt++;
                }
            }
        }
    }
}

console.log(cnt);
