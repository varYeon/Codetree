const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let max = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 2; j++) {
        const sumA = grid[i][j] + grid[i][j + 1] + grid[i][j + 2];

        for (let k = 0; k < n; k++) {
            // point : 두 범위가 같은 줄 / 다른 줄 일 때를 따로 고려
            
            let start = 0; // 기본 값 : 다른 줄일 때
            if (i === k) start = j + 3;

             for (let l = start; l < n - 2; l++) {
                    const sumB = grid[k][l] + grid[k][l + 1] + grid[k][l + 2];

                    max = Math.max(max, sumA + sumB);
                }
            }
        }
    }

console.log(max);
