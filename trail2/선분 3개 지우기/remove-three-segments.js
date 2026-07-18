const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let cnt = 0;

/** 
 * j = i + 1 과 if (i === j) continue 의 차이
 * 1. j = i + 1 => [1,2]과 [2,1]을 같이 취급 (조합, 순서무관)
 * 2. if (i === j) continue => [1,2]과 [2,1]을 다른 취급 (순열, 순서중요)
 */
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            const arr = Array(101).fill(0);

            for (let l = 0; l < n; l++) {
                if (i === l || j === l || k === l) continue;
                const [a, b] = segments[l];
                for (let pos = a; pos <= b; pos++) {
                    arr[pos] += 1;
                }
            }

            let overlapped = false;
            for (let all = 0; all < 101; all++) {
                if (arr[all] > 1) overlapped = true;
            }
            if (!overlapped) cnt++;
        }
    }
}

console.log(cnt);
