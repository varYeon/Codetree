const fs = require("fs");
let str = fs.readFileSync(0).toString().trim().split('');

str[1] = '';
str[str.length - 2] = '';

console.log(str.join(''));
