const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];

const newStr1 = str1.split('').sort();
const newStr2 = str2.split('').sort();

if (newStr1.join('') === newStr2.join('')) console.log('Yes');
else console.log('No');
