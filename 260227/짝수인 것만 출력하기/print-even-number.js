const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const n = input[0];
const arr = input[1].split(' ').map(Number);
const arrNew = [];

for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0) arrNew.push(arr[i]);
}

console.log(arrNew.join(' '));