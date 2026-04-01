const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

function printStar(n) {
    if (n === 0) return;

    for (let i = 0; i < n; i++) {
        process.stdout.write('* ');
    }
    process.stdout.write('\n');
    
    printStar(n - 1);

    for (let i = n; i > 0; i--) {
        process.stdout.write('* ');
    }
    process.stdout.write('\n');
}

printStar(n);
