const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let thing = '';

if (n >= 3000) thing = 'book';
else if (n >= 1000) thing = 'mask';
else if (n >= 500) thing = 'pen';
else thing = 'no';

console.log(thing);
