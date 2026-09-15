const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

let result = '';

if (a === 5) result = 'A';
else if (a % 2 === 0) result = 'B';

console.log(result);
