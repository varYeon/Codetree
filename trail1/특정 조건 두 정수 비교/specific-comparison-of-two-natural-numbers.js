const fs = require("fs");
let inputs = fs.readFileSync(0).toString().trim().split(' ').map((a) => Number(a));

let a = inputs[0];
let b = inputs[1];
let result = [];

if (a < b) result.push(1);
else result.push(0);

if (a === b) result.push(1);
else result.push(0);

console.log(result.join(' '));
