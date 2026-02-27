const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

const arr = [];
arr.push(1, n);

for (let i = 2; ; i++) {
    const a = arr[i - 2] + arr[i - 1];
    arr.push(a);
    if (arr[i] > 100) break;
}

console.log(arr.join(' '));