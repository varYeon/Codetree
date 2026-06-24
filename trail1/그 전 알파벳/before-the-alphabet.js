const fs = require('fs');
let str = fs.readFileSync(0).toString().trim();

let beforeNum = str.charCodeAt() - 1;
if (beforeNum === 96) beforeNum = 122; // a = 97, z = 122
let result = String.fromCharCode(beforeNum);

console.log(result);
