const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const pairs = input.slice(1, 1 + m).map(line => line.split(' ').map(Number));

let cntMax = 0;

for (let a = 1; a < n; a++) {
    for (let b = a + 1; b <= n; b++) {
        let cnt = 0;

        for (let i = 0; i < m; i++) {
            aa = pairs[i][0];
            bb = pairs[i][1];

            if (a === aa && b === bb || a === bb && b === aa) cnt++;
        }

        cntMax = Math.max(cntMax, cnt);
    }
}

console.log(cntMax);
