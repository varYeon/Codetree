const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let pin = 0;
let sum = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) {
        pin = i;
        for (let j = pin; j >= pin - 3; j--) {
            sum += input[j];
        }
        break;
    }
}

console.log(sum);
