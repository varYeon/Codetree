const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);

let hours = 0;
let minutes = 0;

if (b <= d) {
    hours = (c - a) * 60;
    minutes = d - b;
}
else {
    hours = (c - a - 1) * 60;
    minutes = (60 - b) + d;
}

let total = hours + minutes;

console.log(total);
