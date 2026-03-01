const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let a = input[0];
const b = input[1];
let remain = [];

while (a > 1) {
    remain.push(Math.floor(a % b));
    a = Math.floor(a / b);
}

let result = 0;

for (let i = 0; i < b; i++) {
    let count = 0;
    for (let j = 0; j < remain.length; j++) {
        if (remain[j] === i) count++;
    }
    result += count ** 2;
}

console.log(result);