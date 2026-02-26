const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let even = 0;
let odd = 0;
let result = 0;

for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) even += input[i];
    else odd += input[i];
}

if(even >= odd) result = even - odd;
else result = odd - even;

console.log(result);
