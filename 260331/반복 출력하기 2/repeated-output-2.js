const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

function Recursive(n) {
    if (n === 0) return;

    Recursive(n - 1);
    console.log('HelloWorld');
}

Recursive(n - 1);
