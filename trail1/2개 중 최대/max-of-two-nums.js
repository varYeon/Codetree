const fs = require("fs");
let inputs = fs.readFileSync(0).toString().trim().split(' ').map((a) => Number(a));

const a = inputs[0]
const b = inputs[1]

console.log(a >= b ? a : b);
