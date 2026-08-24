const fs = require("fs");
let inputs = fs.readFileSync(0).toString().trim().split(' ').map((a) => Number(a));

console.log(Math.abs(inputs[0] - inputs[1]));
