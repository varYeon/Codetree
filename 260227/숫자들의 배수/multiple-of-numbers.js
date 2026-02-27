const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

const arr = [];
let count = 0;

for (let i = 1; ; i++) {
    const a = n * i;
    arr.push(a);

    if (a % 5 === 0) {
        count++;
        if (count === 2) break;
    }
}

console.log(arr.join(' '));