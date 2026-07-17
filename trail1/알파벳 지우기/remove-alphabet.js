const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0].split('');
const b = input[1].split('');

const newA = [];
const newB = [];

for (let i = 0; i < a.length; i++) {
    if (a[i].charCodeAt(0) >= 48 && a[i].charCodeAt(0) <= 57) newA.push(a[i]);
    else continue;
}

for (let i = 0; i < b.length; i++) {
    if (b[i].charCodeAt(0) >= 48 && b[i].charCodeAt(0) <= 57) newB.push(b[i]);
    else continue;
}

const result = Number(newA.join('')) + Number(newB.join(''));

console.log(result);
