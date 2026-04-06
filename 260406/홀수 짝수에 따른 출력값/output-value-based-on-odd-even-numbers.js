const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

function evenOdd(N) {
    if (N === 1 || N === 2) return N;

    return N + evenOdd(N - 2);
}

console.log(evenOdd(N));
