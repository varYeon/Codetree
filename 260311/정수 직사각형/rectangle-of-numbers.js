const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const n = input[0];
const m = input[1];

let num = 0;

for (let i = 0; i < n; i++) {
    const arr2d = [];
    for (let j = 0; j < m; j++) {
        num += 1;
        arr2d.push(num);
    }
    console.log(arr2d.join(' '));
}

