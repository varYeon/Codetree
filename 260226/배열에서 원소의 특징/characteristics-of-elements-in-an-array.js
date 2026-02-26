const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let pin = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] % 3 === 0) {
        pin = i;
        break;
    }
}

console.log(input[pin - 1]);
