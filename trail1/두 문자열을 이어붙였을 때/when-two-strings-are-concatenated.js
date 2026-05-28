const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];
const b = input[1];

const ab = a + b;
const ba = b + a;

if (ab === ba) console.log(true);
else console.log(false);
