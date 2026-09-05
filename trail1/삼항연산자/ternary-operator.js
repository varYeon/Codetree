const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

console.log(n === 100 ? 'pass' : 'failure');
