const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0].split('').map((num) => Number(num));
const l = a.length;

let maxN = 0;

for (let i = 0; i < l; i++) {
    if (a[i] === 0) a[i] = 1;
    else a[i] = 0;

    let decimal = 0;
    for (let j = 0; j < l; j++) {
        decimal = decimal * 2 + a[j];
    }

    maxN = Math.max(maxN, decimal);

    if (a[i] === 0) a[i] = 1;
    else a[i] = 0;
}

console.log(maxN);
