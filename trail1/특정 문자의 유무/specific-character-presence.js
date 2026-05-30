const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let ee = '';
input.includes('ee') ? ee = 'Yes' : ee = 'No';

let ab = '';
input.includes('ab') ? ab = 'Yes' : ab = 'No';

console.log(ee, ab);
