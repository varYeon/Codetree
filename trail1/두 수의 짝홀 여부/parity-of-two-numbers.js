const fs = require("fs");
let inputs = fs.readFileSync(0).toString().trim().split(' ').map((a) => Number(a));

let a = inputs[0];
let b = inputs[1];

function isEven(x) {
    if (x % 2 === 0) console.log('even');
    else console.log('odd');
}

isEven(a);
isEven(b);
