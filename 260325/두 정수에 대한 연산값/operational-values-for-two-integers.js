const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b] = input[0].split(" ").map(Number);

function calcula(a, b) {
    let big = a;
    let small = b;

    if (b > a) {
        big = b;
        small = a;
        return [small * 2, big + 25];
    }

    return [big + 25, small * 2];
}

[a, b] = calcula(a, b);

console.log(a, b);
