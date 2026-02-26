const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
input.unshift(0);

let even = 0;
let sum = 0;
let count = 0;

for (let i = 1; i < input.length; i++) {
    if (i % 2 === 0) even += input[i];
    if (i % 3 === 0) {
        sum += input[i];
        count++;
    }
}

console.log(even, (sum / count).toFixed(1));
