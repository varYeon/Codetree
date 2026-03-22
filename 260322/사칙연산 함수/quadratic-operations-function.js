const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);

function plus(a, c) {
    const result = a + c;
    return `${a} + ${c} = ${result}`
}

function minus(a, c) {
    const result = a - c;
    return `${a} - ${c} = ${result}`
}

function multiply(a, c) {
    const result = a * c;
    return `${a} * ${c} = ${result}`
}

function divide(a, c) {
    const result = a / c;
    return `${a} / ${c} = ${result}`
}

let print;
if (o === '+') print = plus(a, c);
else if (o === '-') print = minus(a, c);
else if (o === '/') print = divide(a, c);
else if (o === '*') print = multiply(a, c);
else print = 'False';

console.log(print);
