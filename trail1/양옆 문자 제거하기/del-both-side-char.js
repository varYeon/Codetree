const fs = require("fs");
let str = fs.readFileSync(0).toString().trim().split('');
const len = str.length;

const result = str.filter((_, idx) => idx !== 1 && idx !== len - 2);

console.log(result.join(''));
