const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('');

let x = 0, y = 0;
// 시계방향: 북(0), 동(1), 남(2), 서(3)
let dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
let dirNum = 0; // 북쪽에서 시작

for (let i = 0; i < input.length; i++) {
    if (input[i] === 'L') { // 반시계
        dirNum = (dirNum + 3) % 4;
        // dirNum - 1 + 4 = dirNum + 3 (양수 보장)
    } else if (input[i] === 'R') { // 시계
        dirNum = (dirNum + 1) % 4;
    } else if (input[i] === 'F') {
        x += dx[dirNum];
        y += dy[dirNum];
    }
}

console.log(x, y);
