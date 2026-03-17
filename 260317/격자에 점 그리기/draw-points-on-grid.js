const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const nm = input[0].split(' ').map(Number);
const n = nm[0];
const m = nm[1];

const arr2d = Array.from({ length: n }, () => new Array(n).fill(0));

let count = 0;
for (let i = 1; i <= m; i++) {
    const rc = input[i].split(' ').map(Number);
    const r = rc[0];
    const c = rc[1];
    count++;

    arr2d[r - 1][c - 1] = count;
}

for (let i = 0; i < n; i++) {
    console.log(arr2d[i].join(' '));
}
