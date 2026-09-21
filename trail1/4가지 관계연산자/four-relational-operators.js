const fs = require("fs");
let inputs = fs.readFileSync(0).toString().trim().split(' ').map((a) => Number(a));

let a = inputs[0];
let b = inputs[1];

if (a >= b) console.log(1);
else console.log(0);

if (a > b) console.log(1);
else console.log(0);

if (a <= b) console.log(1);
else console.log(0);

if (a < b) console.log(1);
else console.log(0);
