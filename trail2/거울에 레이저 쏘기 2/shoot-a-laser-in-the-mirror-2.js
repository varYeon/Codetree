const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1);
const startNum = Number(input[n + 1]);

// 시계방향: 북(0), 동(1), 남(2), 서(3)
let dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1];
let x, y, dirNum;

if (1 <= startNum && startNum <= n) {
    dirNum = 2;
    x = 0;
    y = startNum - 1;
} else if (n < startNum && startNum <= 2 * n) {
    dirNum = 3;
    x = startNum % (n + 1);
    y = n - 1;
} else if (2 * n < startNum && startNum <= 3 * n) {
    dirNum = 0;
    x = n - 1;
    y = 3 * n - startNum;
} else if (3 * n < startNum && startNum <= 4 * n) {
    dirNum = 1;
    x = 4 * n - startNum;
    y = 0;
}

let count = 0;

while (x >= 0 && x < n && y >= 0 && y < n) {
    if (arr[x][y] === '/') {

        if (dirNum === 0) dirNum = 1;
        else if (dirNum === 1) dirNum = 0;
        else if (dirNum === 2) dirNum = 3;
        else if (dirNum === 3) dirNum = 2;

    } else if (arr[x][y] === '\\') {

        if (dirNum === 0) dirNum = 3;
        else if (dirNum === 1) dirNum = 2;
        else if (dirNum === 2) dirNum = 1;
        else if (dirNum === 3) dirNum = 0;

    }

    count++;

    x += dx[dirNum];
    y += dy[dirNum];
}

console.log(count);
