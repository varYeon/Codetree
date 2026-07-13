const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');

const ab = input[0].split('');
const ba = input[1].split('');

const newAB = [];
const newBA = [];

// 숫자 아스키 코드 48~57
for (let i = 0; i < ab.length; i++) {
    if (ab[i].charCodeAt(0) >= 48 && ab[i].charCodeAt(0) <= 57) newAB.push(ab[i]);
    else break;
}

for (let i = 0; i < ba.length; i++) {
    if (ba[i].charCodeAt(0) >= 48 && ba[i].charCodeAt(0) <= 57) newBA.push(ba[i]);
    else break;
}

const result = Number(newAB.join('')) + Number(newBA.join(''));

console.log(result);
