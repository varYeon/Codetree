const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(' ');

let result = 0;
for (const a of arr) {
    result += Number(a);
}

console.log(result);