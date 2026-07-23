const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const ns = input[0].split(' ');
const n = Number(ns[0]);
const strA = ns[1];
let cnt = 0;

for (let i = 1; i <= n; i++) {
    const strB = input[i];

    if (strA === strB) cnt++;
}

console.log(cnt);
