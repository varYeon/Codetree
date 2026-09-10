const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim().split(' '));

let name = '';

if (n === 1) name = 'John';
else if (n === 2) name = 'Tom';
else if (n === 3) name = 'Paul';
else name = 'Vacancy';

console.log(name);
