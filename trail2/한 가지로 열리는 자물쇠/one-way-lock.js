const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const [a, b, c] = input[1].trim().split(' ').map(Number);

let cnt = 0;

for (let i = 1; i <= n; i++) {
    const Agap = Math.abs(a - i);
    for (let j = 1; j <= n; j++) {
        const Bgap = Math.abs(b - j);
        for (let k = 1; k <= n; k++) {
            const Cgap = Math.abs(c - k);

            if (Agap <= 2 || Bgap <= 2 || Cgap <= 2) cnt++;
        }
    }
}

console.log(cnt);
