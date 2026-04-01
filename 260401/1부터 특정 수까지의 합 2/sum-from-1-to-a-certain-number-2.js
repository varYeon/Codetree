const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

function Recursion(n) {
    if (n === 1) return 1;

    return n + Recursion(n - 1);
}


console.log(Recursion(n));
