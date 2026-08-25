const fs = require("fs");
let inputs = fs.readFileSync(0).toString().trim().split(' ').map((a) => Number(a));

const h = inputs[0];
const w = inputs[1];
const b = Math.floor(w / ((h / 100) * (h / 100)));

console.log(b)
if (b >= 25) console.log('Obesity');
