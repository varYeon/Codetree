const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');

const ab = Number(input[0] + input[1]);
const ba = Number(input[1] + input[0]);

console.log(ab + ba);
