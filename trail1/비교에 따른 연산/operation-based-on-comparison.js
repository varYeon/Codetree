const fs = require("fs");
let inputs = fs.readFileSync(0).toString().trim().split(' ').map((a) => Number(a));

const a = inputs[0];
const b = inputs[1];
let result = 0;

if (a > b) result = a * b;
else result = Math.floor(b / a);

console.log(result);
