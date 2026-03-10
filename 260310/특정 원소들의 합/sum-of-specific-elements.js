const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let arr2d = [];
let sum = 0;

for (let i = 0; i < 4; i++) {
    arr2d.push(input[i].split(' ').map(Number));

    for (let j = 0; j <= i; j++) {
        sum += arr2d[i][j];
    }
}

console.log(sum);
