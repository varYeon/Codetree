const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [x1, x2, x3, x4] = input[0].split(' ').map(Number);

let isOverlap = false;

if (x1 <= x4 && x3 <= x2) isOverlap = true;

if (isOverlap) console.log('intersecting');
else console.log('nonintersecting');
