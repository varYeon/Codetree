const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];

const L = A.length;
let openCount = 0;
let cnt = 0;

for (let i = 0; i < L; i++) {
    if (A[i] === '(' && A[i + 1] === '(') {
        openCount++;
    }
    else if (A[i] === ')' && A[i + 1] === ')') cnt += openCount;
}

console.log(cnt);
