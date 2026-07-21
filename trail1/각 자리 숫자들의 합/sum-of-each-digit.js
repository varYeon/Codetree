const fs = require('fs');
let n = fs.readFileSync(0).toString().trim().split(' ');

n = n.toString().split('');
let result = 0;

for (let i = 0; i < n.length; i++) {
    result += Number(n[i]);
}

console.log(result);
