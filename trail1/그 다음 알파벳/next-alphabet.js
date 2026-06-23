const fs = require('fs');
let str = fs.readFileSync(0).toString().trim();

let changeNum = str.charCodeAt() + 1;
if (changeNum === 123) changeNum = 97; // a = 97, z = 122
let result = String.fromCharCode(changeNum);

console.log(result);
