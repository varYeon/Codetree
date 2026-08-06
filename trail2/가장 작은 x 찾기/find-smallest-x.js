const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const conditions = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
// [ [ 1, 10 ], [ 10, 16 ], [ 20, 25 ], [ 40, 50 ] ]

for (let i = 1; i <= 10000; i++) {
    let x = i;
    let ok = true;

    for (let j = 0; j < n; j++) {
        x *= 2;
        const a = conditions[j][0];
        const b = conditions[j][1];

        if (!(x >= a && x <= b)) {
            ok = false;
            break;
        }
    }

    if (!ok) continue;
    else {
        console.log(i);
        break;
    }
}
