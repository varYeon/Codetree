const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

const area = n * n;

console.log(area);

if (n < 5) console.log('tiny');
