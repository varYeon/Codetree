const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

// 최대 N의 크기가 15 이므로 4중 반복문 -> 가능
let cnt = 0;

// 0,0 시직점 제외, 첫번째 점프
for (let i = 1; i < R - 2; i++) {
    for (let j = 1; j < C - 2; j++) {

        // 두번째 점프
        for (let k = i + 1; k < R - 1; k++) {
            for (let l = j + 1; l < C - 1; l++) {

                if (grid[0][0] !== grid[i][j]) {
                    if (grid[i][j] !== grid[k][l]) {
                        if (grid[k][l] !== grid[R - 1][C - 1]) cnt++;
                    }
                }
            }
        }
    }
}

console.log(cnt);
