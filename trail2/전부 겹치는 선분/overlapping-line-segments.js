const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
} // [ [ 1, 5 ], [ 4, 6 ], [ 2, 4 ] ]

let allOverlap = true;

for (let i = 0; i < n - 1; i++) {
    const [x1, x2] = segments[i];
    const [x3, x4] = segments[i + 1];

    if (x4 < x1 || x3 > x2) {
        allOverlap = false;
        break;
    }
}

console.log(allOverlap ? 'Yes' : 'No');
