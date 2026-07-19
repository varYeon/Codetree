const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let cnt = 0;

sum = (a + b).toString().split('');

for (let i = 0; i < sum.length; i++) {
    if (sum[i] === '1') cnt++;
}

console.log(cnt);
