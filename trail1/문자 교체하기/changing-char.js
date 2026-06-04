const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

const strA = input[0].split('');
const strB = input[1].split('');

strB[0] = strA[0];
strB[1] = strA[1];

console.log(strB.join(''));
