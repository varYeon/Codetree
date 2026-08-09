const fs = require('fs');
let inputs = fs.readFileSync(0).toString().trim().split('\n');

const strA = inputs[0];
const strB = inputs[1];
let n = 0;
let same = false;

for (let i = 0; i < strA.length; i++) {
    let newA = '';
    const shift = i % strA.length;

    // length = 6
    newA = strA.slice(-shift) + strA.slice(0, -shift);
    // (-shift) -> start = -shift, end = length(기본값) => -1 ~ 6, f
    // (0, -shift) -> start = 0, end = length - shift (음수일 때) / (양수일 때) shift => 0 ~ 5, abcde (5 포함 x)
    // ** end 값은 포함 X
    n++;

    if (newA === strB) {
        same = true;
        break;
    }
}

if (!same) n = -1;
else n -= 1

console.log(n);
