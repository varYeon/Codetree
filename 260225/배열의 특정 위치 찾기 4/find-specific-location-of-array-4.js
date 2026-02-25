const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) break;
    if (arr[i] % 2 === 0) {
        sum += arr[i];
        count++;
    }
}

console.log(count, sum);