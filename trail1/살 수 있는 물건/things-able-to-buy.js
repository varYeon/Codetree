const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim().split(' '));

let canBuy = '';

if (n < 1000) canBuy = 'no';
else if (n >= 1000 && n < 3000) canBuy = 'mask';
else canBuy = 'book';

console.log(canBuy);
