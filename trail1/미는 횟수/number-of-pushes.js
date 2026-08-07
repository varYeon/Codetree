const fs = require('fs');
let inputs = fs.readFileSync(0).toString().trim().split('\n');

const strA = inputs[0];
const strB = inputs[1];
let n = 0;
let same = false;

for (let i = 0; i < strA.length; i++) {
    let newA = '';
    const shift = i % strA.length;

    newA = strA.slice(-shift) + strA.slice(0, -shift);
    n++;

    if (newA === strB) {
        same = true;
        break;
    }
}

if (!same) n = -1;
else n -= 1

console.log(n);
