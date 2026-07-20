const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
// [ [ -3, 4 ], [ 7, 8 ], [ 10, 16 ], [ 3, 9 ] ]

let cnt = 0;

for (let i = 0; i < n-1; i++) {
    const [x1_i, x2_i] = segments[i];
    let overlapped = false;

    for (let j = i + 1; j < n; j++) {
        const [x1_j, x2_j] = segments[j];

        if (x1_i < x1_j && x2_i > x2_j) {
            overlapped = true;
            continue;
        } else if (x1_i > x1_j && x2_i < x2_j) {
            overlapped = true;
            continue;
        }
    }

    if (!overlapped) cnt++;
}

console.log(cnt);
