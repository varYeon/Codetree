const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();

let str = '';

if (n === 'S') str = 'Superior';
else if (n === 'A') str = 'Excellent';
else if (n === 'B') str = 'Good';
else if (n === 'C') str = 'Usually';
else if (n === 'D') str = 'Effort';
else str = 'Failure';

console.log(str);
