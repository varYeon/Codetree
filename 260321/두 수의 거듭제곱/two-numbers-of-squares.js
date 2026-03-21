const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [a, b] = input.map(Number);

function calSquare(a, b){
    return a ** b;
}

console.log(calSquare(a, b));
