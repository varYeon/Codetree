const fs = require('fs');
let inputs = fs.readFileSync(0).toString().trim().split('\n');

const strA = inputs[0];
const strB = inputs[1];
let n = 0;
let same = false;

for (let i = 0; i < strA.length; i++) {
    // 옆으로 밀기, 카운트 세기
    // 계속 strB와 같은지 파악, 같으면 그 떄 same = true
    let newA = '';
    const shift = i % strA.length;

    if (newA === strB) {
        same = true;
        break;
    }

    newA = strA.slice(-shift) + strA.slice(0, -shift);
    console.log(newA)
    n++;

}

if (!same) n = -1;

console.log(n);
