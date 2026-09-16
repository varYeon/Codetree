const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

if (a % 2 !== 0) a += 3;
if (a % 3 === 0) a /= 3;

console.log(a);
