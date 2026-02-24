const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(' ');
let result = '';

for (let i = arr.length-1; i >= 0; i--) {
    result += arr[i];
}

console.log(result);