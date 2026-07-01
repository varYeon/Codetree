const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

let max = 0;

for (let i = 0; i < n; i++) {
    const a = arr[i];

    for (let j = 0; j < n; j++) {
        if (j === i || j === i + 1 || j === i - 1) continue;
        const b = arr[j]

        max = Math.max(max, a + b);
    }
}

console.log(max);
