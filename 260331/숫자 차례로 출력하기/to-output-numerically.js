const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

function increase(n) {
    if (n === 0) return;

    const result = [];

    increase(n - 1);

    for (let i = 0; i < n; i++) {
        result.push(i);
    }

    console.log(result.join(' '))
}

function decrease(n) {
    if (n === 0) return;

    const result = [];

    decrease(n - 1);

    for (let i = n; i > 0; i--) {
         result.push(i);
    }
    
}

increase(n);
decrease(n) 
