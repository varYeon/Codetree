const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let n = input[0];
let m = input[1];

while(n!==0) {
    console.log(n);
    const divide = n / m;
    n = Math.floor(divide);
}
