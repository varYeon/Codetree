const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

let max = 0;

// a를 i번, b를 j번
for (let i = 0; i * a <= c; i++) {
    for (let j = 0; i * a + j * b <= c; j++) {
        const sum = i * a + j * b;
        max = Math.max(max, sum);
    }
}

console.log(max);
