const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const [a, b, c] = input[1].split(' ').map(Number);
const [a2, b2, c2] = input[2].split(' ').map(Number);

function distance(x, y, n) {
    const diff = Math.abs(x - y);

    return Math.min(diff, n - diff);
}

let cnt = 0;

for (let i = 1; i <= n; i++) {
    const Adivde = distance(a, i, n);
    const A2divde = distance(a2, i, n);

    for (let j = 1; j <= n; j++) {
        const Bdivde = distance(b, j, n);
        const B2divde = distance(b2, j, n);

        for (let k = 1; k <= n; k++) {
            const Cdivde = distance(c, k, n);
            const C2divde = distance(c2, k, n);

            if (Adivde <= 2 && Bdivde <= 2 && Cdivde <= 2) cnt++;
            else if (A2divde <= 2 && B2divde <= 2 && C2divde <= 2) cnt++;
        }
    }
}

console.log(cnt);
