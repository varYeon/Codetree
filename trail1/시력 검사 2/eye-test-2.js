const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim().split(' '));

let result = '';

if (a >= 1.0) result = 'High';
else if (a >= 0.5) result = 'Middle';
else result = 'Low';

console.log(result)