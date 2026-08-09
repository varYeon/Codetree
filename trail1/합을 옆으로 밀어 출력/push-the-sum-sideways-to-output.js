const fs = require('fs');
let inputs = fs.readFileSync(0).toString().trim().split('\n').map((a) => Number(a));

let n = inputs[0]
let sum = 0

for (let i = 1; i <= n; i++) {
    sum += inputs[i]
}

const str = String(sum);
const result = str.slice(1) + str.slice(0, 1);

console.log(result);
