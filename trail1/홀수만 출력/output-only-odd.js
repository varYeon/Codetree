const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(" ");

A = Number(A);
B = Number(B);

let str = "";

for (let i = A; i <= B; i++) {
    if (i % 2 !== 0) str += i + " ";
}

console.log(str);