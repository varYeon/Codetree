const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString();

A = Number(A);

console.log(input, input * 2, input * 3, input * 4, input * 5);