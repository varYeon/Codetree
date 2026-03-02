const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

const arr = ['L', 'E', 'B', 'R', 'O', 'S'];
let result = '';

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === input) {
        result = i;
        break;
    }
    else result = 'None';
}

console.log(result);