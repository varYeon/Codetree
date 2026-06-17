const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0].split('');

const n = commands.length;
let x = 0, y = 0;
// 시계방향: 북(0), 동(1), 남(2), 서(3)
let dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
let dirNum = 0; // 북쪽에서 시작
let time = 0;
let isBack = false;

for (let i = 0; i < n; i++) {
    if (commands[i] === 'L') {
        dirNum = (dirNum + 3) % 4;
        time++;
    } else if (commands[i] === 'R') {
        dirNum = (dirNum + 1) % 4;
        time++;
    } else if (commands[i] === 'F') {
        x += dx[dirNum];
        y += dy[dirNum];
        time++;
    }

    if (x === 0 && y === 0) {
        isBack = true;
        break;
    }
}

if (!isBack) {
    time = -1;
}

console.log(time);
